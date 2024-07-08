// import httpStatus from 'http-status';
// import catchAsync from '../../utils/catchAsync';

// import sendResponse from '../../utils/sendResponse';

// // get own profile
// const getMe = catchAsync(async (req, res) => {
//   const { userId, role } = req.user;

//   const result = await UserServices.getMe(userId, role);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is retrieved successfully',
//     data: result,
//   });
// });

// // update a user profile
// const updateUser = catchAsync(async (req, res) => {
//   const { password, student: studentData } = req.body;

//   const result = await UserServices.createStudentIntoDB(
//     req.file,
//     password,
//     studentData,
//   );

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Student is created successfully',
//     data: result,
//   });
// });

// // create a user
// const createUser = catchAsync(async (req, res) => {
//   const result = await UserServices.createUserIntoDB(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is created successfully',
//     data: result,
//   });
// });

// // create Admin
// const createAdmin = catchAsync(async (req, res) => {
//   const { password, faculty: facultyData } = req.body;

//   const result = await UserServices.createFacultyIntoDB(
//     req.file,
//     password,
//     facultyData,
//   );

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Faculty is created successfully',
//     data: result,
//   });
// });

// // create moderator
// const createModerator = catchAsync(async (req, res) => {
//   const { password, admin: adminData } = req.body;

//   const result = await UserServices.createAdminIntoDB(
//     req.file,
//     password,
//     adminData,
//   );

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admin is created successfully',
//     data: result,
//   });
// });

// // change status of a user BLOCKED | ACTIVE
// const changeStatus = catchAsync(async (req, res) => {
//   const id = req.params.id;

//   const result = await UserServices.changeStatus(id, req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Status is updated successfully',
//     data: result,
//   });
// });
// export const UserControllers = {
//   getMe,
//   updateUser,
//   createUser,
//   createAdmin,
//   createModerator,
//   changeStatus,
// };
