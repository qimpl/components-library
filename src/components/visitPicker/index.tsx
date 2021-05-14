import React, { useEffect, useState } from 'react';

import { ArrowRight24, ArrowLeft24 } from '@carbon/icons-react';
import styled from 'styled-components';

import Theme from 'theme';

import Button from '../button';
import Text, { TextVariant } from '../text';
import Title, { TitleVariant } from '../title';

type UserAvailabilities = {
  weekday: number;
  startTime: string;
  endTime: string;
};

type VisitPickerProps = {
  userAvailabilities: UserAvailabilities[];
  userBookedVisits: BookedVisit[];
  handleClickVisitSlot: React.ReactEventHandler;
  noAvailabilityMsg: string;
};

type BookedVisit = {
  hour: string;
  date: string;
};

type WeekDaysAvailabilities = {
  order: number;
  dailyAvailabilities: string[];
  timestamp: number;
};

const VisitPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 300px;
  border: 1px solid ${Theme.colors.lightGray};
  border-radius: 30px;

  > section {
    header {
      display: grid;
      grid-template-columns: 30px auto 30px;
      justify-content: space-between;
      align-items: center;
      padding: 5px 25px;

      > h3 {
        grid-column: 2;
      }
    }

    section {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: auto auto;
      padding: 25px;
      border-top: 1px solid ${Theme.colors.lightGray};

      @media (max-width: 768px) {
        grid-template-columns: auto auto;
      }

      @media (max-width: 400px) {
        grid-template-columns: auto;
      }

      > p {
        display: grid;
        grid-column: 2;
        justify-content: center;

        @media (max-width: 768px) {
          grid-column: 1;
          justify-content: flex-end;
        }

        @media (max-width: 400px) {
          grid-column: 1;
          justify-content: center;
        }
      }
    }
  }
`;

const VisitPicker = ({
  userAvailabilities,
  userBookedVisits,
  handleClickVisitSlot,
  noAvailabilityMsg = '',
}: VisitPickerProps): React.ReactElement => {
  const [weekDays, setWeekDays] = useState<WeekDaysAvailabilities[]>([]);
  const [currentWeekDay, setCurrentWeekDay] = useState(0);

  useEffect(() => {
    const weekdaysAvailabilities: WeekDaysAvailabilities[] = [];
    let date = new Date();
    for (let i = 0; i <= 6; i += 1) {
      const nextDate = new Date(date.setDate(date.getDate() + 1));
      date = nextDate;

      const weekdayAvailabilities = userAvailabilities.filter(
        (element: UserAvailabilities) => element.weekday === nextDate.getDay()
      );

      const dailyAvailabilities: string[] = [];

      weekdayAvailabilities.forEach((element: UserAvailabilities) => {
        const startTime = element.startTime.split(':')[0];
        const endTime = element.endTime.split(':')[0];

        for (let hour = Number(startTime); hour < Number(endTime); hour += 1) {
          const bookedVisit = userBookedVisits.find(
            (visit: BookedVisit) =>
              new Date(visit.date).getDate() === nextDate.getDate() && Number(visit.hour.split(':')[0]) === hour
          );
          if (!bookedVisit) {
            dailyAvailabilities.push(`${hour}:00`);
          }
        }
      });

      weekdaysAvailabilities.push({ order: i, dailyAvailabilities, timestamp: nextDate.getTime() });
    }
    setWeekDays(weekdaysAvailabilities);
  }, [userAvailabilities, userBookedVisits]);

  return (
    <VisitPickerContainer>
      <section>
        {weekDays.length !== 0 && (
          <div>
            <header>
              {weekDays[currentWeekDay].order !== 0 && (
                <Button
                  isSmall
                  isTransparent
                  handleClick={() => setCurrentWeekDay(currentWeekDay - 1)}
                  color={Theme.colors.gray}
                >
                  <ArrowLeft24 />
                </Button>
              )}
              <Title variant={TitleVariant.H3}>{new Date(weekDays[currentWeekDay].timestamp).toDateString()}</Title>
              {weekDays[currentWeekDay].order !== 6 && (
                <Button
                  isSmall
                  isTransparent
                  handleClick={() => setCurrentWeekDay(currentWeekDay + 1)}
                  color={Theme.colors.gray}
                >
                  <ArrowRight24 />
                </Button>
              )}
            </header>
            <section>
              {weekDays[currentWeekDay].dailyAvailabilities.length > 0 ? (
                weekDays[currentWeekDay].dailyAvailabilities.map((availability: string) => (
                  <Button
                    key={`${weekDays[currentWeekDay].timestamp} - ${availability}`}
                    handleClick={handleClickVisitSlot}
                  >
                    {availability}
                  </Button>
                ))
              ) : (
                <Text variant={TextVariant.MEDIUM}>{noAvailabilityMsg}</Text>
              )}
            </section>
          </div>
        )}
      </section>
    </VisitPickerContainer>
  );
};

export default VisitPicker;
export { VisitPickerProps };
