import { generateService } from '@umijs/openapi'

generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: 'http://localhost:88/api/v2/api-docs',
  serversPath: './src',
})
