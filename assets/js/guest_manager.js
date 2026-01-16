// Sistema de gestión de invitados (Local)
const GUEST_KEY = 'party_guests_list';

function saveGuest(name, status) {
    const guests = JSON.parse(localStorage.getItem(GUEST_KEY) || '[]');
    const newGuest = {
        name: name,
        status: status,
        time: new Date().toLocaleString()
    };
    guests.push(newGuest);
    localStorage.setItem(GUEST_KEY, JSON.stringify(guests));
    return newGuest;
}

function getGuests() {
    return JSON.parse(localStorage.getItem(GUEST_KEY) || '[]');
}

function clearGuests() {
    localStorage.removeItem(GUEST_KEY);
}