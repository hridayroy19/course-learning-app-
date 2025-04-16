import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createTopicSchema } from './topic.validation';
import { TopicController } from './topic.controller';
import auth from '../../middlewares/auth';

const topicRouter = Router();

topicRouter.post('/', auth("teacher"),validateRequest(createTopicSchema), TopicController.createTopic);
topicRouter.get('/', TopicController.getAllTopics);


export default topicRouter;
