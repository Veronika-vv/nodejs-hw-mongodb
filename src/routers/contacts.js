import express from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  authenticate,
  isValidId,
  ctrlWrapper(getContactByIdController),
);

router.post(
  '/',
  authenticate,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  authenticate,
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

router.delete(
  '/:contactId',
  authenticate,
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default router;
