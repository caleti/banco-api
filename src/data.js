/**
 * Ejemplo de información en la base de datos.
 */

const transacciones = [
    { id: 1, cuenta_id: 1, numero_de_tarjeta: 1231231231, monto: 500.0 },
    { id: 2, cuenta_id: 2, numero_de_tarjeta: 1231231231, monto: 20.0 },
    { id: 3, cuenta_id: 3, numero_de_tarjeta: 1231231231, monto: 100.0 },
    { id: 4, cuenta_id: 3, numero_de_tarjeta: 1231231231, monto: 90.99 },
    { id: 5, cuenta_id: 4, numero_de_tarjeta: 4444444444, monto: -4000 }
];

const cuentas = [
    { id: 1, nombre: 'Taquilla' },
    { id: 2, nombre: 'Cafetería' },
    { id: 3, nombre: 'Sourcenirs' },
    { id: 4, nombre: 'Exhibiciones' }
];

module.exports = {
    transacciones,
    cuentas
}