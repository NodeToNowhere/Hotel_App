use hotel_db;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: 'John',
        email: 'john@example.com',
        checked_in: true
    },
    {
        name: 'Ben',
        email: 'Ben@example.com',
        checked_in: false
    },
    {
        name: 'Dave',
        email: 'Dave@example.com',
        checked_in: true
    },
    {
        name: 'Nick',
        email: 'Nick@example.com',
        checked_in: false
    },
    {
        name: 'Steve',
        email: 'Steve@example.com',
        checked_in: true
    }
]
)