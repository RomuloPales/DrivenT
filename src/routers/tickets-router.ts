import { Router } from 'express';
import { createUserTicket, findAllTicketTypes, findUserTickets } from '@/controllers/tickets-controller';
import { authenticateToken } from '@/middlewares';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .post('/', createUserTicket)
  .get('/', findUserTickets)
  .get('/types', findAllTicketTypes);

export { ticketsRouter };
