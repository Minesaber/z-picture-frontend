import { generateService } from '@umijs/openapi'
import { BASE_URL } from '@/constants/backend.js'

generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: BASE_URL + '/api/v2/api-docs',
  serversPath: './src',
})
