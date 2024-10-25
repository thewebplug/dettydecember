// utils/eventFilters.js

import { parse, isWithinInterval, startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, addDays } from 'date-fns';

/**
 * Filter events based on multiple criteria
 * @param {Array} events - Array of event objects
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered events array
 */
const filterEvents = (events = [], filters = {}) => {
  if (!Array.isArray(events)) return [];
  
  return events.filter(event => {
    try {
      const eventDate = parse(event.date, "yyyy-MM-dd'T'HH:mm:ss.SSSx", new Date());
      const today = new Date();

      // Location filter
      if (filters.location && event.address.toLowerCase() !== filters.location.toLowerCase()) {
        return false;
      }

      // Categories filter
      if (filters.categories && filters.categories.length > 0) {
        if (!filters.categories.includes(event.category)) {
          return false;
        }
      }

      // Specific date filter
      if (filters.date) {
        const filterDate = parse(filters.date, 'yyyy-MM-dd', new Date());
        if (!isWithinInterval(eventDate, { 
          start: startOfDay(filterDate), 
          end: endOfDay(filterDate) 
        })) {
          return false;
        }
      }

      // Today's events
      if (filters.today) {
        if (!isWithinInterval(eventDate, { 
          start: startOfDay(today), 
          end: endOfDay(today) 
        })) {
          return false;
        }
      }

      // Last week's events
      if (filters.lastWeek) {
        const lastWeekStart = startOfWeek(addDays(today, -7));
        const lastWeekEnd = endOfWeek(addDays(today, -7));
        if (!isWithinInterval(eventDate, { 
          start: lastWeekStart, 
          end: lastWeekEnd 
        })) {
          return false;
        }
      }

      // This weekend's events
      if (filters.thisWeekend) {
        const weekendStart = startOfDay(addDays(endOfWeek(today), -1)); // Saturday
        const weekendEnd = endOfDay(endOfWeek(today)); // Sunday
        if (!isWithinInterval(eventDate, { 
          start: weekendStart, 
          end: weekendEnd 
        })) {
          return false;
        }
      }

      // This month's events
      if (filters.thisMonth) {
        if (!isWithinInterval(eventDate, { 
          start: startOfMonth(today), 
          end: endOfMonth(today) 
        })) {
          return false;
        }
      }

      // Next 30 days events
      if (filters.next30Days) {
        const thirtyDaysLater = addDays(today, 30);
        if (!isWithinInterval(eventDate, { 
          start: startOfDay(today), 
          end: endOfDay(thirtyDaysLater) 
        })) {
          return false;
        }
      }

      return true; // Event passed all filters
    } catch (error) {
      console.error('Error filtering event:', error);
      return false; // Exclude events that cause parsing errors
    }
  });
};

export { filterEvents };