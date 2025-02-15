import dynamoose from 'dynamoose';

const taskSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String, // 存储 category 的 id
    required: true,
  },
  estiStartTime: {
    type: String,
    required: true,
  },
  estiEndTime: {
    type: String,
    required: true,
  },
  estiDuration: {
    type: Number,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const TaskModel = dynamoose.model('Task', taskSchema);

export { TaskModel };