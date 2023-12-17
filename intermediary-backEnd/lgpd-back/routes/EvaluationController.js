import express from 'express';
import evaluationService from '../services/EvaluationService.js';

const router = express.Router();

router.post('/addEvaluation', async function(req, res) {
  const evaluationModel = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender
  }

  const evaluation = await evaluationService.saveEvaluation(evaluationModel);

  return res.status(200).json(evaluation);
});

router.get('/getAllEvaluations', async function(req, res) {
  const allEvaluations = await evaluationService.getAllEvaluations();
  return res.status(200).json(allEvaluations);
});

router.get('/evaluation:id', async function(req, res) {
  const evaluation = await evaluationService.getEvaluationById(req.params.id);
  return res.status(200).json(evaluation);
});

router.delete('/deleteEvaluation:id', async function(req, res) {
  const deleteEvaluation = await evaluationService.deleteEvaluationById(req.params.id);
  return res.status(200).json(deleteEvaluation);
});

router.put('/updateEvaluation:id', async function(req, res) {
  const evaluationModel = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender
  }

  const evaluation = await evaluationService.updateEvaluationById(req.params.id, evaluationModel);

  return res.status(200).json(evaluation);
});

export default router;
