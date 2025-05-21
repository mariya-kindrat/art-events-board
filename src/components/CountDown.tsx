"use client";
import { FC, useEffect, useState } from "react";
import Countdown from "react-countdown";

interface CountDownProps {
  onComplete: () => void;
}

const CountDown: FC<CountDownProps> = ({ onComplete }) => {
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    setEndDate(new Date(Date.UTC(2025, 5, 7, 12)));
  }, []);

  if (!endDate) return null;

  return (
    <Countdown
      date={endDate}
      onComplete={onComplete}
      renderer={({ days, hours, minutes }) => (
        <div className="font-bold text-2xl text-white">
          {days}days {hours}hours {minutes}minutes
        </div>
      )}
    />
  );
};

export default CountDown;