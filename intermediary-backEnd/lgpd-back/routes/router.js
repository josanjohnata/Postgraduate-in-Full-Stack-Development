import express from 'express';
import userController from 'UserController.js';
import courseController from 'CourseController.js';
import teacherController from 'TeacherController.js';
import evaluationController from 'EvaluationController.js';

const router = express.Router();

router.get('/', function(req, res) {
  console.log('Funcionou!');
  res.status(200).json({ message: 'Funcionou!' });
});

router.use('/', userController);
router.use('/', courseController);
router.use('/', teacherController);
router.use('/', evaluationController);

export default router;
