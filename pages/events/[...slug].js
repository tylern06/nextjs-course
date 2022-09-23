import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">...loading</p>;
  }

  const filteredYear = Number(filterData[0]);
  const filterMonth = Number(filterData[1]);

  if (isNaN(filteredYear) || isNaN(filterMonth)) {
    return <p>Invalid filter</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filterMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div>
        <ResultsTitle date={date} />
      </div>
    );
  }

  const date = new Date(filteredYear, filterMonth - 1);

  console.log('filter data', filterData);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}
