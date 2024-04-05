import fastify from "fastify";

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";

import { createEvent } from "./routes/create-event";
import { RegisterForEvent } from "./routes/register-for-event";
import { GetEvent } from "./routes/get-event";
import { GetAttendeeBadge } from "./routes/get-attendee-badge";
import { CheckIn } from "./routes/check-in";
import { GetEventAttendees } from './routes/get-event-attendees'
import { errorHandler } from "./erro-handler";
import fastifyCors from "@fastify/cors";


const app = fastify();

app.register(fastifyCors , {
    origin: '*' 
})


app.register(fastifySwagger, {
    swagger:{
        consumes: ['application/json'],
        produces: ['application/json'],
        info:{
            title: 'pass.in',
            description: 'Especificações da API para o back-end do projeto pass.in',
            version: '1.0.0',
        }
    },
    transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs'
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(RegisterForEvent);
app.register(GetEvent);
app.register(GetAttendeeBadge);
app.register(CheckIn);
app.register(GetEventAttendees);

app.setErrorHandler(errorHandler);

app.listen({port:3333, host:'0.0.0.0'}).then(() => {
    console.log('Http Server running in port 3333')
});