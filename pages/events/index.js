import React from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import { getFeaturedEvents, getAllEvents } from '../../dummy-data';
import EventSearch from '../../components/events/EventSearch';

export default function EventHomePage() {
  const items = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={items} />
    </>
  );
}
