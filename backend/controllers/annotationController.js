import Annotation from '../models/Annotation.js';

export const addAnnotation = async (req, res) => {
  try {
    const annotation = await Annotation.create(req.body);
    res.status(201).json(annotation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAnnotationsByShape = async (req, res) => {
  try {
    const annotations = await Annotation.find({ shapeId: req.params.shapeId });
    res.json(annotations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};