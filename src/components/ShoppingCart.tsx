import { fetcher } from '@/hooks/useFetch';
import { useToast } from '@/hooks/useToast';
import { currency } from '@/lib/formatters/numberFormat';
import { capitalize } from '@/lib/formatters/stringFormat';
import { Popover, Transition } from '@headlessui/react';
import type { Booking, Cart, Guest, Item, Room } from '@prisma/client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Fragment, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineMinus, HiPlusSm } from 'react-icons/hi';

const ShoppingCart = () => {
  const queryClient = useQueryClient();
  const feedback = useToast();
  const [loading, setLoading] = useState(false);
  const [isConfirmationMode, setIsConfirmationMode] = useState(false);
  const {
    data: currentStay,
    isLoading: isStayLoading,
    isError: isStayError,
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
    data: cartItems,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['shopping-cart'],
    queryFn: async () =>
      await fetcher<
        (Cart & {
          item: Item;
        })[]
      >(`/api/bookings/${currentStay?.booking.id}/cart`),
    enabled: !!currentStay,
  });

  const { mutate: increase } = useMutation({
    mutationFn: async (itemId: number) =>
      await axios.post<{ data: Cart; message: string }>(
        `/api/bookings/${currentStay?.booking.id}/cart`,
        {
          itemId,
        }
      ),
    onMutate() {
      setLoading(true);
    },
    onSettled: () => setLoading(false),
    onSuccess: () => {
      feedback('success', `Article ajouté au panier`);
      return queryClient.invalidateQueries(['shopping-cart']);
    },
    onError() {
      feedback('error', `Une erreur est survenue`);
    },
  });
  const { mutate: decrease } = useMutation({
    mutationFn: async (itemId: number) =>
      await axios.delete(`/api/bookings/${currentStay?.booking.id}/cart`, {
        data: { itemId },
      }),
    onMutate() {
      setLoading(true);
    },
    onSettled: () => setLoading(false),
    onSuccess() {
      feedback('success', `Article supprimé du panier`);
      return queryClient.invalidateQueries(['shopping-cart']);
    },
    onError() {
      feedback('error', `Une erreur est survenue`);
    },
  });
  const { mutate: order, isLoading: isOrdering } = useMutation({
    mutationFn: async () =>
      (await axios.post(`/api/bookings/${currentStay?.booking.id}/orders`))
        .data,
    onSettled() {
      setIsConfirmationMode(false);
    },
    onSuccess: () => {
      feedback('success', `Commande effectuée avec succès`);
      return queryClient.invalidateQueries(['shopping-cart']);
    },
    onError() {
      feedback('error', `Une erreur est survenue`);
    },
  });

  if (!currentStay) return null;
  return (
    <Popover className='absolute top-4 left-1/2 z-10 -translate-x-1/2'>
      {({ open }) => (
        <>
          <Popover.Button className='focus flex items-center justify-center rounded-full border border-white bg-white bg-opacity-20 p-3 text-white focus:outline-none focus:ring-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            <FaShoppingCart className='h-8 w-8' />
          </Popover.Button>
          <Transition
            as={Fragment}
            show={open}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel
              as='div'
              className='absolute left-1/2 z-30 mt-3 w-screen max-w-md -translate-x-1/2 transform rounded-md bg-white sm:px-0 lg:max-w-lg'
            >
              <div className='py-2 px-4'>
                {isLoading || isStayLoading ? (
                  <p>Chargement ...</p>
                ) : isError || isStayError ? (
                  <p>Une erreur is survenue</p>
                ) : (
                  <>
                    <div className='max-h-[30rem] divide-y-[1px] overflow-y-auto'>
                      {cartItems.map(({ id, item, quantity }) => (
                        <div
                          key={id}
                          className='grid grid-cols-4 items-center py-2 font-medium'
                        >
                          <p className='col-span-2'>{capitalize(item.name)}</p>
                          <p className='text-sm'>
                            {currency(item.price)}{' '}
                            <span className='text-lg'>x {quantity}</span>
                          </p>
                          <div className='mx-2 flex gap-x-2 place-self-end'>
                            <button
                              onClick={() => !loading && increase(item.id)}
                              className='rounded-full bg-green-600 p-1 text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 focus:ring-offset-2 disabled:opacity-60'
                              disabled={loading}
                            >
                              <HiPlusSm className='h-4 w-4' />
                            </button>
                            <button
                              onClick={() => !loading && decrease(item.id)}
                              className='rounded-full bg-red-600 p-1 text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 focus:ring-offset-2 disabled:opacity-60'
                              disabled={loading}
                            >
                              <HiOutlineMinus className='h-4 w-4' />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    {cartItems.length ? (
                      <>
                        <div className='flex justify-between border-t py-4 font-semibold'>
                          <p className='uppercase'>Total</p>
                          <p>
                            {currency(
                              cartItems.reduce(
                                (acc, { item, quantity }) =>
                                  acc + Number(item.price) * quantity,
                                0
                              )
                            )}
                          </p>
                        </div>
                        <div className='flex justify-end py-2'>
                          {isConfirmationMode ? (
                            <>
                              <button
                                disabled={isOrdering}
                                onClick={() => order()}
                                className='mr-2 flex rounded-md bg-green-600 px-4 py-1 font-medium text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-75 focus:ring-offset-2 disabled:opacity-60'
                              >
                                {isOrdering && (
                                  <CgSpinner className='mr-2 animate-spin' />
                                )}
                                Confirmer l&apos;achat
                              </button>
                              <button
                                disabled={isOrdering}
                                onClick={() => setIsConfirmationMode(false)}
                                className='rounded-md bg-red-600 px-4 py-1 font-medium text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75 focus:ring-offset-2 disabled:opacity-60'
                              >
                                annuler
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => setIsConfirmationMode(true)}
                              className='rounded-md bg-blue-600 px-4 py-1 font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-75 focus:ring-offset-2'
                            >
                              Acheter
                            </button>
                          )}
                        </div>
                      </>
                    ) : (
                      <h2 className='text-center text-lg font-medium'>
                        Aucun article dans le panier !
                      </h2>
                    )}
                  </>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
export default ShoppingCart;
