import {prisma} from '../src/lib/prisma';

async function seed(){
    await prisma.event.create({
        data: {
            id: '2167a920-f743-4959-9f41-52d05ff5cfb1',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados!',
            maximumAttendees: 120,
        }
    })
}



seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})