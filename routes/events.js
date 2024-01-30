/*
    /api/events
*/

const { Router} = require('express');
const {check} = require('express-validator')


const {validarJWT} = require('../middlewares/validar-jwt');
const { getEventos,crearEvento,actualizarEvento, eliminarEvento } =require('../controllers/events');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');
const router = Router();


router.use(validarJWT);

//Obtener Eventos
router.get('/', getEventos);


//Crear un nuevo evento
router.post('/',[
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatorio').custom( isDate ),    
    check('end', 'Fecha de finalizacion es obligatorio').custom( isDate ),    
    validarCampos
],  
crearEvento);

//Crear un nuevo evento
router.put('/:id',actualizarEvento);


//Crear un nuevo evento
router.delete('/:id', eliminarEvento);


module.exports = router;