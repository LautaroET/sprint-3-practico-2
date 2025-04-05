import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

const superHeroRepo = new SuperHeroRepository();

export async function obtenerTodosLosSuperHeroesService() {
    return await superHeroRepo.obtenerTodos();
}

export async function crearSuperHeroeService(data) {
    return await superHeroRepo.crear(data);
}

export async function actualizarSuperHeroeService(id, datosActualizados) {
    return await superHeroRepo.actualizar(id, datosActualizados);
}

export async function eliminarSuperHeroeService(id) {
    return await superHeroRepo.eliminar(id);
}

export async function eliminarSuperHeroePorNombreService(nombre) {
    return await superHeroRepo.eliminarPorNombre(nombre);
}



