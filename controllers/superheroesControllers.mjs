import {obtenerTodosLosSuperHeroesService,crearSuperHeroeService,actualizarSuperHeroeService,eliminarSuperHeroeService ,eliminarSuperHeroePorNombreService} from '../services/superheroesService.mjs';
import {renderizarListaSuperheroes,renderizarSuperheroe} from '../views/responseView.mjs';

export async function obtenerTodosLosSuperHeroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperHeroesService();
        res.json(renderizarListaSuperheroes(superheroes));
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}

export async function crearSuperHeroeController(req, res) {
    try {
        const nuevoHeroe = await crearSuperHeroeService(req.body);
        res.status(201).json(renderizarSuperheroe(nuevoHeroe));
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el superhéroe', error: error.message });
    }
}

export async function actualizarSuperHeroeController(req, res) {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        const superHeroeActualizado = await actualizarSuperHeroeService(id, datosActualizados);

        if (!superHeroeActualizado) {
            return res.status(404).json({ mensaje: 'Superhéroe no encontrado' });
        }

        res.json(renderizarSuperheroe(superHeroeActualizado));
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el superhéroe', error: error.message });
    }
}

export async function eliminarSuperHeroeController(req, res) {
    try {
        const { id } = req.params;
        const superHeroeEliminado = await eliminarSuperHeroeService(id);

        if (!superHeroeEliminado) {
            return res.status(404).json({ mensaje: 'Superhéroe no encontrado' });
        }

        res.json(renderizarSuperheroe(superHeroeEliminado));
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el superhéroe', error: error.message });
    }
}
// Esta funcion es las misma de arriba 
// hacer una sola funcion dado un parametro te elimine todos los archivo que tenga ese parametro
export async function eliminarSuperHeroePorNombreController(req, res) {
    try {
        const { nombre } = req.params;
        const superHeroeEliminado = await eliminarSuperHeroePorNombreService(nombre);

        if (!superHeroeEliminado) {
            return res.status(404).json({ mensaje: 'Superhéroe no encontrado con ese nombre' });
        }

        res.json(renderizarSuperheroe(superHeroeEliminado));
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el superhéroe por nombre', error: error.message });
    }
}

