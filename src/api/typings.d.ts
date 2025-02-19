declare namespace API {
  type deletePictureByIdUsingPOSTParams = {
    id?: number
  }

  type DeleteRequest = {
    id?: number
  }

  type getPictureByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type getPictureVOByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type PagePicture_ = {
    current?: number
    pages?: number
    records?: Picture[]
    size?: number
    total?: number
  }

  type PagePictureVO_ = {
    current?: number
    pages?: number
    records?: PictureVO[]
    size?: number
    total?: number
  }

  type PageUserVO_ = {
    current?: number
    pages?: number
    records?: UserVO[]
    size?: number
    total?: number
  }

  type Picture = {
    category?: string
    createTime?: string
    editTime?: string
    id?: number
    isDeleted?: number
    name?: string
    picFormat?: string
    picHeight?: number
    picScale?: number
    picSize?: number
    picWidth?: number
    profile?: string
    reviewMessage?: string
    reviewStatus?: number
    reviewTime?: string
    reviewerId?: number
    tags?: string
    thumbnailUrl?: string
    updateTime?: string
    url?: string
    userId?: number
  }

  type PictureCategoryTagVO = {
    categoryList?: string[]
    tagList?: string[]
  }

  type PictureEditRequest = {
    category?: string
    id?: number
    name?: string
    profile?: string
    tags?: string[]
  }

  type PictureQueryRequest = {
    category?: string
    current?: number
    id?: number
    name?: string
    pageSize?: number
    picFormat?: string
    picHeight?: number
    picScale?: number
    picSize?: number
    picWidth?: number
    profile?: string
    reviewMessage?: string
    reviewStatus?: number
    reviewTime?: string
    reviewerId?: number
    searchText?: string
    sortField?: string
    sortOrder?: string
    tags?: string[]
    userId?: number
  }

  type PictureReviewRequest = {
    id?: number
    reviewMessage?: string
    reviewStatus?: number
  }

  type PictureUpdateRequest = {
    category?: string
    id?: number
    name?: string
    profile?: string
    tags?: string[]
  }

  type PictureUploadByBatchRequest = {
    count?: number
    namePrefix?: string
    searchText?: string
  }

  type PictureUploadRequest = {
    id?: number
    picName?: string
    url?: string
  }

  type PictureVO = {
    category?: string
    createTime?: string
    editTime?: string
    id?: number
    name?: string
    picFormat?: string
    picHeight?: number
    picScale?: number
    picSize?: number
    picWidth?: number
    profile?: string
    tags?: string[]
    thumbnailUrl?: string
    updateTime?: string
    url?: string
    userId?: number
    userVO?: UserVO
  }

  type ResponseBoolean_ = {
    code?: number
    data?: boolean
    message?: string
  }

  type ResponseInt_ = {
    code?: number
    data?: number
    message?: string
  }

  type ResponseLong_ = {
    code?: number
    data?: number
    message?: string
  }

  type ResponseObject_ = {
    code?: number
    data?: Record<string, any>
    message?: string
  }

  type ResponsePagePicture_ = {
    code?: number
    data?: PagePicture_
    message?: string
  }

  type ResponsePagePictureVO_ = {
    code?: number
    data?: PagePictureVO_
    message?: string
  }

  type ResponsePageUserVO_ = {
    code?: number
    data?: PageUserVO_
    message?: string
  }

  type ResponsePicture_ = {
    code?: number
    data?: Picture
    message?: string
  }

  type ResponsePictureCategoryTagVO_ = {
    code?: number
    data?: PictureCategoryTagVO
    message?: string
  }

  type ResponsePictureVO_ = {
    code?: number
    data?: PictureVO
    message?: string
  }

  type ResponseString_ = {
    code?: number
    data?: string
    message?: string
  }

  type ResponseUser_ = {
    code?: number
    data?: User
    message?: string
  }

  type ResponseUserVO_ = {
    code?: number
    data?: UserVO
    message?: string
  }

  type ResponseVoid_ = {
    code?: number
    message?: string
  }

  type testDownloadFileUsingGETParams = {
    /** key */
    key?: string
  }

  type uploadPictureUsingPOSTParams = {
    id?: number
    picName?: string
    url?: string
  }

  type User = {
    createTime?: string
    editTime?: string
    id?: number
    isDeleted?: number
    updateTime?: string
    userAccount?: string
    userAvatar?: string
    userName?: string
    userPassword?: string
    userProfile?: string
    userRole?: string
  }

  type UserAddRequest = {
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserLoginRequest = {
    userAccount?: string
    userPassword?: string
  }

  type UserQueryRequest = {
    current?: number
    id?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    userAccount?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserRegisterRequest = {
    checkPassword?: string
    userAccount?: string
    userPassword?: string
  }

  type UserUpdateRequest = {
    id?: number
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserVO = {
    createTime?: string
    editTime?: string
    id?: number
    updateTime?: string
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }
}
