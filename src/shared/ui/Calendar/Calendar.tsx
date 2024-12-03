import React, { useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import styles from "./Calendar.module.css";
import "dayjs/locale/ru";

dayjs.locale("ru"); // Устанавливаем локаль

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

  const dayInfo = useMemo(() => {
    const days: (number | null)[] = [];

    return {
      days
    }
  }, [currentDate])

  const handlePrevMonth = () => {
  };

  const handleNextMonth = () => {
  };

  return (
    <div className={styles.calendar}>
      <header className={styles.header}>
        <button onClick={handlePrevMonth}>←</button>
        <span>{currentDate.format("MMMM YYYY")}</span>
        <button onClick={handleNextMonth}>→</button>
      </header>
      <div className={styles.grid}>
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
          <div key={day} className={styles.day}>
            {day}
          </div>
        ))}
        {dayInfo.days.map((day) => (
          <div
            key={day}
            className={`${styles.cell} ${day === null ? styles.empty : ""}`}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
