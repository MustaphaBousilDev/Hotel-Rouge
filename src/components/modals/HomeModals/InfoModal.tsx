import { fetcher } from '@/hooks/useFetch';
import { currency } from '@/lib/formatters/numberFormat';
import { capitalize, title } from '@/lib/formatters/stringFormat';
import { Dialog, Transition } from '@headlessui/react';
import type {
  Booking,
  Guest,
  Item,
  Order,
  OrderStatus,
  Room,
  SpaAppointment,
} from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import Link from 'next/link';
import { type FC, Fragment, type ReactNode, useCallback } from 'react';
import { HiX } from 'react-icons/hi';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

type Orders = (Order & {
  item: Item;
})[];

type Appoinments = (SpaAppointment & {
  item: Item;
})[];

interface DisplayOrder {
  id: string;
  item: Item;
  quantity: number;
  status: OrderStatus;
}

const InfoModal: FC<Props> = ({ isOpen, onClose }) => {
  const {
    data: stay,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['/api/tv/current-guest'],
    queryFn: async () =>
      await fetcher<{
        guest: Guest;
        booking: Booking & {
          room: Room;
        };
      } | null>('/api/tv/current-guest'),
  });
  const {
    data: orders,
    isError: isOrdersError,
    isLoading: isOrdersLoading,
  } = useQuery({
    queryKey: ['all-orders'],
    queryFn: async () =>
      await fetcher<Orders>(`/api/bookings/${stay?.booking.id}/orders`),
    enabled: !!stay?.booking.id,
    select: useCallback(
      (data: Orders) =>
        data.map(
          (o) =>
            ({
              id: o.id,
              item: o.item,
              quantity: o.quantity,
              status: o.status,
            } as DisplayOrder)
        ),
      []
    ),
  });
  const {
    data: reservations,
    isError: isReservationsError,
    isLoading: isReservationsLoading,
  } = useQuery({
    queryKey: ['all-reservations'],
    queryFn: async () =>
      await fetcher<Appoinments>(
        `/api/bookings/${stay?.booking.id}/reservations`
      ),
    enabled: !!stay?.booking.id,
    select: useCallback(
      (data: Appoinments) =>
        data.map(
          (a) =>
            ({
              id: a.id,
              item: a.item,
              quantity: 1,
              status: a.status,
            } as DisplayOrder)
        ),
      []
    ),
  });
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-lg'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={onClose}
                      >
                        <span className='sr-only'>Close panel</span>
                        <HiX className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-hidden bg-white py-6 shadow-xl'>
                    <div className='px-4 sm:px-6'>
                      <Dialog.Title className='text-center text-2xl font-medium text-gray-900'>
                        Informations de séjour
                      </Dialog.Title>
                    </div>
                    {isLoading || isOrdersLoading || isReservationsLoading ? (
                      <div className=''>
                        <p className='text-center text-gray-500'>
                          Chargement...
                        </p>
                      </div>
                    ) : isError || isOrdersError || isReservationsError ? (
                      <div className=''>
                        <p className='text-center text-gray-500'>
                          Une erreur est survenue
                        </p>
                      </div>
                    ) : !stay?.guest ? (
                      <div className=''>
                        <p className='text-center text-gray-500'>
                          Aucun client n&apos;est actuellement enregistré
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className='relative mt-6 flex-1 overflow-y-auto px-4 sm:px-6'>
                          <div className='px-2'>
                            <p className='mb-4 text-xl font-medium text-gray-900'>
                              Chambre N° {stay.booking.room.number}
                            </p>
                            <p className='mb-4 text-xl font-medium text-gray-700'>
                              {title(
                                (stay.guest.gender === 'MALE' ? 'M.' : 'Mme.') +
                                  ' ' +
                                  stay.guest.firstname +
                                  ' ' +
                                  stay.guest.lastname
                              )}{' '}
                              séjourné{' '}
                              {formatDistanceToNow(
                                new Date(stay.booking.checkIn),
                                { locale: fr }
                              )}
                              .
                            </p>
                            <p className='mb-4 text-lg font-medium text-gray-700'>
                              Prix de la chambre:{' '}
                              {currency(stay.booking.bookingPrice)}{' '}
                              <span className='text-base'>/ nuit</span>
                            </p>
                            <table className='w-full text-left text-sm text-gray-500'>
                              <thead className='bg-gray-50 text-xs uppercase text-gray-700'>
                                <tr>
                                  <th
                                    scope='col'
                                    className='rounded-l-lg py-2 px-4'
                                  >
                                    Article
                                  </th>
                                  <th scope='col' className='py-2 px-4'>
                                    Quantité
                                  </th>
                                  <th
                                    scope='col'
                                    className='rounded-r-lg py-2 px-4'
                                  >
                                    Prix Unit.
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {[...orders, ...reservations].map(
                                  ({ id, quantity, item, status }) =>
                                    status === 'SERVED' && (
                                      <tr key={id} className='bg-white '>
                                        <th
                                          scope='row'
                                          className='whitespace-nowrap py-2 px-4 font-medium text-gray-900'
                                        >
                                          {capitalize(item.name)}
                                        </th>
                                        <td className='py-2 px-4'>
                                          {quantity}
                                        </td>
                                        <td className='py-2 px-4'>
                                          {currency(item.price)}
                                        </td>
                                      </tr>
                                    )
                                )}
                              </tbody>
                              <tfoot>
                                <tr className='font-semibold text-gray-900'>
                                  <th
                                    scope='row'
                                    className='py-2 px-4 text-base'
                                  >
                                    Total
                                  </th>
                                  <td className='py-2 px-4' />
                                  <td className='py-2 px-4'>
                                    {currency(
                                      [...orders, ...reservations]
                                        .filter(
                                          (order) => order.status === 'SERVED'
                                        )
                                        .reduce(
                                          (acc, order) =>
                                            acc +
                                            order.quantity *
                                              Number(order.item.price),
                                          0
                                        )
                                    )}
                                  </td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        </div>
                        <div className='mt-6 flex items-center justify-end px-4 sm:px-6'>
                          <Link
                            href={'/orders'}
                            className='flex w-full items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 enabled:hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto'
                          >
                            Voir tous les commandes
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default InfoModal;
