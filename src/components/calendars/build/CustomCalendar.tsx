import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { generateDate, months } from '@/utils/calendar';
import cn from "@/utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Link from "next/link";
import ArrowRoundedIcon from "@/icons/ArrowRoundedIcon";

export default function CustomCalendar() {
	const days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
	const currentDate = dayjs();
    
    const [active, setActive] = useState<boolean>(false);

	const [today, setToday] = useState<any>(currentDate);
	const [currentWeekStartDay, setCurrentWeekStartDay] = useState<number>(currentDate.startOf('week').date());
	console.log('start of week',currentWeekStartDay)
    const [currentWeekEndDay, setCurrentWeekEndDay] = useState<number>(currentDate.endOf('week').date());
	console.log('end of week',currentWeekEndDay)
	console.log('fucks the weeks')
	console.log(currentWeekStartDay)
	console.log(currentWeekEndDay)
	useEffect(() => {
		setCurrentWeekStartDay(today.startOf('week').date());
		setCurrentWeekEndDay(today.endOf('week').date());
	}, [today]);
	
	//get week of today 
	let [counter, setCounter] = useState(0);
	const [selectDate, setSelectDate] = useState(currentDate);
	return (
		<div className="flex gap-10  justify-center     items-center sm:flex-row flex-col">
			<div className="w-[90%] py-2 pb-7  flex flex-col gap-0 min-h-[140px]">
				<div className="flex items-center justify-between">
					<h3 className="text-xl font-bold text-gray-600">Stuff Schedule</h3>
					<Link 
					    className="text-sm   text-blue-500 font-semibold" 
					    href="/admin/calendar">
						Show more
					</Link>
				</div>
				<div className="flex min-w-full pt-2 justify-between items-center">
					<h1 className="select-none   flex items-center gap-1">
						<span className="font-bold">
							Today,
						</span>
						<span className="text-sm text-gray-400">
							{months[today.month()]}, {today.year()}
						</span>
					</h1>
					
				</div>
				<div className=" flex gap-2">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-[10px] font-bold text-center h-10 w-[17%]  grid place-content-center text-gray-400 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className="flex items-center  mt-[-10px] ">
					<div className=" flex flex-row   w-full border-b">
						{generateDate(today.month(), today.year()).map(
							({ date, currentMonth, today }, index) => {
								if(date.date() >= currentWeekStartDay && date.date() <= currentWeekEndDay){
									return (
										<div
											key={index}
											className=" text-center text-gray-500 h-10   w-[17%] flex items-center justify-center font-bold     text-xs"
										>
											<h1
											    className="flex-col gap-1 flex mt-5 pb-3"
											>
												<span
													data-indice={index}
													className={cn(
														currentMonth ? "" : "text-gray-400",
														today ? " bg-gray-300 text-white" : "",
														selectDate.toDate().toDateString() === date.toDate().toDateString() ? "bg-primary   text-white" : "",
														"rounded-full   p-3 w-7 h-7 flex items-center justify-center  hover:bg-primary hover:text-white transition-all cursor-pointer select-none ",
														
													)}
													onClick={() => {
														setSelectDate(date);
													}}
												>{date.date()}</span>
												<span 
												    className={cn(
														" w-4 h-4 rotate-45  flex items-center justify-center  ml-[6px] bg-white rounded-[5px] border-b border-r ",
														selectDate.toDate().toDateString() === date.toDate().toDateString() ? "opacity-100" : "opacity-0"
													)}>
													<ArrowRoundedIcon 
														width="25px" 
														height="10px" 
														color='#06b6d4'
														className="-rotate-45"
													/>
												</span>
											</h1>
										</div>
									);
								} 
							}
						)}
					</div>
					
				</div>
			</div>
			
		</div>
	);
}