import { Router } from 'express';
import {
  getPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage,
} from '@src/services/packages/package.handler.js';

const router = Router();

/**
 * @route   GET /api/v1/packages
 * @desc    Get all active packages
 * @access  Public
 */
router.get('/', getPackages);

/**
 * @route   GET /api/v1/packages/:id
 * @desc    Get package by ID
 * @access  Public
 */
router.get('/:id', getPackageById);

/**
 * @route   POST /api/v1/packages
 * @desc    Create new package
 * @access  Private (Admin)
 */
router.post('/', createPackage);

/**
 * @route   PUT /api/v1/packages/:id
 * @desc    Update package
 * @access  Private (Admin)
 */
router.put('/:id', updatePackage);

/**
 * @route   DELETE /api/v1/packages/:id
 * @desc    Delete package
 * @access  Private (Admin)
 */
router.delete('/:id', deletePackage);

export default router;
