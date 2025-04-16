import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import httpStatus from 'http-status'
import { userService } from "./user.service"



const getUser = catchAsync(async (req, res) => {
    const result = await userService.getUser()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: 'Users getting successfully',
        data: result,
    })
})

export const userController = {
    getUser,

}