import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_errors/bad-request";

export async function GetEvent(app: FastifyInstance) {
    app
    .withTypeProvider<ZodTypeProvider>()
    .get('/events/:eventId', {
        schema: {
            summary:'Get an event',
            tags: ['events'],
            params: z.object({
                eventId: z.string().uuid()  
            }),
        }
    } , async (request, reply) => {
        const { eventId } = request.params;

        const event = await prisma.event.findUnique({
            select:{
                id: true,
                title: true,
                details: true,
                slug: true,
                maximumAttendees: true, 
                attendees: true,
                _count: {
                    select:{
                        attendees: true,
                    }
                }
            },
            where:{
                id: eventId
            }
        })


        if(event === null){
            throw new BadRequest('Event not found')
        }

        return reply.send({event: {
            ...event,
            attendeesAmount: event._count.attendees
        }})

    })
}