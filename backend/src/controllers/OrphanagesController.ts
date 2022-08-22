import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import orphanageView from "../views/orphanages_view";

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    });
    return response.json(orphanageView.renderMany(orphanages));
  },
  async show(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    try {
      const orphanage = await orphanagesRepository.findOneOrFail(request.params.id, {
        relations: ['images']
      });
      return response.json(orphanageView.render(orphanage));
    } catch (error) {
      return response.status(404).json({ message: 'Orphanage not found!' });
    }
  },
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;
    const orphanagesRepository = getRepository(Orphanage);
    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => ({ path: image.filename }));
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });
    await orphanagesRepository.save(orphanage);
    return response.status(201).json(orphanage);
  }
};
