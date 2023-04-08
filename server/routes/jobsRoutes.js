import express from 'express';
import {
  createJob,
  getAllJobs,
  deleteJob,
  updateJob,
  showStats,
} from '../controllers/jobsController.js';
import testUser from '../middleware/testUser.js';

const router = express.Router();

router.route('/').get(getAllJobs).post(testUser, createJob);
router.route('/stats').get(showStats);
router.route('/:id').delete(testUser, deleteJob).patch(testUser, updateJob);

export default router;
