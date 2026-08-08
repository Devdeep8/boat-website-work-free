import asyncHandler from '@src/utils/async-handler.js';
import { Package } from '@src/db/models/index.js';
import { successResponse } from '@src/helpers/response.helpers.js';

/**
 * Get all active packages
 */
export const getPackages = asyncHandler(async (req, res) => {
  const packages = await Package.findAll({
    where: { isActive: true },
    order: [['sortOrder', 'ASC'], ['id', 'ASC']],
    attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
  });

  return successResponse({
    data: packages,
    message: 'Packages retrieved successfully',
  }, res);
});

/**
 * Get package by ID
 */
export const getPackageById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const package = await Package.findOne({
    where: { id, isActive: true },
    attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
  });

  if (!package) {
    return res.status(404).json({
      status: 'error',
      message: 'Package not found',
    });
  }

  return successResponse({
    data: package,
    message: 'Package retrieved successfully',
  }, res);
});

/**
 * Create new package (admin only)
 */
export const createPackage = asyncHandler(async (req, res) => {
  const packageData = req.body;

  const newPackage = await Package.create(packageData);

  return successResponse({
    data: newPackage,
    message: 'Package created successfully',
  }, res, 201);
});

/**
 * Update package (admin only)
 */
export const updatePackage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const [updatedCount] = await Package.update(updateData, {
    where: { id },
  });

  if (updatedCount === 0) {
    return res.status(404).json({
      status: 'error',
      message: 'Package not found',
    });
  }

  const updatedPackage = await Package.findByPk(id);

  return successResponse({
    data: updatedPackage,
    message: 'Package updated successfully',
  }, res);
});

/**
 * Delete package (soft delete, admin only)
 */
export const deletePackage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleted = await Package.destroy({
    where: { id },
  });

  if (!deleted) {
    return res.status(404).json({
      status: 'error',
      message: 'Package not found',
    });
  }

  return successResponse({
    message: 'Package deleted successfully',
  }, res);
});
