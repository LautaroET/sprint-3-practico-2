import IRepository from './IRepository.mjs';
import SuperHero from '../models/SuperHero.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerTodos() {
        return await SuperHero.find();
    }

    async crear(data) {
        const nuevoHeroe = new SuperHero(data);
        return await nuevoHeroe.save();
    }

    async actualizar(id, datosActualizados) {
        return await SuperHero.findOneAndUpdate({ id }, datosActualizados, { new: true });
    }

    async eliminar(id) {
        return await SuperHero.findOneAndDelete({ id });
    }
    async eliminarPorNombre(nombreSuperHeroe){
        return await SuperHero.findOneAndDelete({ nombreSuperHeroe });
    }
}


export default SuperHeroRepository;



