# Referencia al document
const usuariosRef = db.collection('usuarios');

## Objeto
const usuario = {
    nombre: 'Susana',
    activo: false,
    fechaNaci: 0,
    salario: 1950
} 


## insert into usuarios...
db.collection('usuarios')
    .add(usuario)
    .then(docRef => {
        console.log(docRef);
    })
    .catch(e => console.log('error', e));

## update usuarios set activo = true where ...
usuariosRef
    .doc('ub6bZNerDMW29Sn1oHa2')
    .update({
        activo: true
    });

Destructivo
usuariosRef
    .doc('ub6bZNerDMW29Sn1oHa2')
    .set({
        activo: true,
        edad: 44,
        casado: true,
        id: 123
    });

## delete from usuarios where id = 'xx'
usuariosRef
    .doc('pRLadP5MPO0wHtM9kb0R')
    .delete()
    .then(() => console.log('Borrado'))
    .catch(e => console.log('error', e));

## select * from usuarios
usuariosRef.onSnapshot(retornaDocumentos); // Se recarga cada vez que cambia algo en la colección
usuariosRef.get().then(retornaDocumentos);

## select * from usuarios where activo = true
usuariosRef.where('activo', '==', true)
    .get().then(retornaDocumentos);

## select * from usuarios where salario > 1800
usuariosRef.where('salario', '>', 1800)
    .get().then(retornaDocumentos);


## select * from usuarios where salario >= 1800 and salario <= 2300
usuariosRef
    .where('salario', '>=', 1800)
    .where('salario', '<=', 2300)
    .get().then(retornaDocumentos);

## select * from usuarios where salario > 1800 and activo == true
usuariosRef
    .where('salario', '>=', 1800)
    .where('activo', '==', true)
    .get().then(retornaDocumentos);