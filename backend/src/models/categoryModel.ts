import dynamoose from 'dynamoose';

const categorySchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
});

const CategoryModel = dynamoose.model('Category', categorySchema);

export { CategoryModel };