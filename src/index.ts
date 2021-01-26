import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos';

const usuariosRef = db.collection('usuarios');

usuariosRef.limit(5)
    .get().then(retornaDocumentos);

const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext);

let lastDocument: any = null;
let firstDocument: any = null;
btnNext.addEventListener('click', () => {
    const query = usuariosRef
                    .orderBy('nombre')
                    .startAfter(lastDocument);

    query.limit(2).get().then(snap => {
        firstDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length - 1] || null;
        retornaDocumentos(snap);
    })
});

btnNext.click();


const btnPrevious = document.createElement('button');
btnPrevious.innerText = 'Previous Page';
document.body.append(btnPrevious);

btnPrevious.addEventListener('click', () => {
    const query = usuariosRef
                    .orderBy('nombre')
                    .endBefore(firstDocument);

    query.limit(2).get().then(snap => {
        firstDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length - 1] || null;
        retornaDocumentos(snap);
    })
});