export interface Event {
    eventId?: string;
    name: string;
    description: string;
    title: string;
    startDateEvent: string;
    eventDateEvent: string;
    hour: string;
    cost: string;
    modality?: string;
  
    link: string;
    cityId: string;
    provinceId: string;
    typeEventId: string;
    eventFromId: string;
    ticketPriceId: string;
    createdByUser: string;
  }
  