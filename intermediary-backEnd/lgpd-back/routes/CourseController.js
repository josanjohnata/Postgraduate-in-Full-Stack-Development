import express from 'express';
import courseService from '../services/CourseService.js';

const router = express.Router();

router.post('/addCourse', async function(req, res) {
  const courseModel = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender
  }

  const course = await courseService.saveCourse(courseModel);

  return res.status(200).json(course);
});

router.get('/getAllCourses', async function(req, res) {
  const allCourses = await courseService.getAllCourses();
  return res.status(200).json(allCourses);
});

router.get('/course:id', async function(req, res) {
  const course = await courseService.getCourseById(req.params.id);
  return res.status(200).json(course);
});

router.delete('/deleteCourse:id', async function(req, res) {
  const deleteCourse = await courseService.deleteCourseById(req.params.id);
  return res.status(200).json(deleteCourse);
});

router.put('/updateCourse:id', async function(req, res) {
  const courseModel = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender
  }

  const course = await courseService.updateCourseById(req.params.id, courseModel);

  return res.status(200).json(course);
});

export default router;
