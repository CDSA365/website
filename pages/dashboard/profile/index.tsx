import {
    Chip,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableRow,
} from "@mui/material";
import { Input } from "@material-tailwind/react";
import moment from "moment";
import {
    StyledButton,
    StyledProfileAvatar,
    StyledProfileAvatarContainer,
    StyledProfileDataContainer,
    StyledProfileHeader,
    StyledProfilePaper,
} from "../../../components/styled";
import StudentDashboardLayout from "../../../layouts/student-dashboard";
import { useAppSelector } from "../../../store/hooks";
import { FaRedoAlt, FaSave } from "react-icons/fa";
import { NextPage } from "next";

type Props = {};

const ProfilePage: NextPage = (props: Props) => {
    const user = useAppSelector((state) => state.user.data);
    return (
        <StudentDashboardLayout title="Profile">
            <div className="w-full flex space-x-6">
                <div className="w-3/12">
                    <StyledProfilePaper elevation={0}>
                        <StyledProfileHeader />
                        <StyledProfileAvatarContainer>
                            <StyledProfileAvatar
                                sx={{ width: "100px", height: "100px" }}
                            />
                        </StyledProfileAvatarContainer>
                        <StyledProfileDataContainer>
                            <div className="prose text-center">
                                <h2 className="text-slate-700 my-0">
                                    {[user.first_name, user.last_name].join(
                                        " "
                                    )}
                                </h2>
                                <p className="my-0">{user.email}</p>
                            </div>
                            <Divider className="py-2" />
                            <div>
                                <Table
                                    size="small"
                                    sx={{
                                        [`& .${tableCellClasses.root}`]: {
                                            borderBottom: "none",
                                        },
                                    }}
                                >
                                    <TableBody>
                                        <TableRow>
                                            <TableCell
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                ID
                                            </TableCell>
                                            <TableCell>{user.id}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                Phone
                                            </TableCell>
                                            <TableCell>{user.phone}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                Joined
                                            </TableCell>
                                            <TableCell>
                                                {moment(user.created_at).format(
                                                    "LL"
                                                )}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                Status
                                            </TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={
                                                        user.status === 1
                                                            ? "Active"
                                                            : "Inactive"
                                                    }
                                                    color={
                                                        user.status === 1
                                                            ? "success"
                                                            : "error"
                                                    }
                                                    variant="outlined"
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </StyledProfileDataContainer>
                    </StyledProfilePaper>
                </div>
                <div className="w-9/12">
                    <Paper
                        elevation={0}
                        className="p-4 flex flex-col space-y-6"
                    >
                        <Divider textAlign="left">
                            <Chip label="EDIT PROFILE" color="info" />
                        </Divider>
                        <div className="w-full flex space-x-6">
                            <div className="w-1/2">
                                <Input
                                    readOnly
                                    size="lg"
                                    label="First Name"
                                    value={user.first_name || ""}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    readOnly
                                    size="lg"
                                    label="Last Name"
                                    value={user.last_name || ""}
                                />
                            </div>
                        </div>
                        <div className="w-full flex space-x-6">
                            <div className="w-1/3">
                                <Input
                                    readOnly
                                    size="lg"
                                    label="Address Line One"
                                    value={user.address_one || ""}
                                />
                            </div>
                            <div className="w-1/3">
                                <Input
                                    readOnly
                                    size="lg"
                                    label="Address Line Two"
                                    value={user.address_two || ""}
                                />
                            </div>
                            <div className="w-1/3">
                                <Input
                                    readOnly
                                    size="lg"
                                    label="City"
                                    value={user.city || ""}
                                />
                            </div>
                        </div>
                        <div className="w-full flex space-x-6">
                            <div className="w-1/3">
                                <Input
                                    readOnly
                                    size="lg"
                                    label="District"
                                    value={user.district || ""}
                                />
                            </div>
                            <div className="w-1/3">
                                <Input
                                    readOnly
                                    size="lg"
                                    label="State"
                                    value={user.state || ""}
                                />
                            </div>
                            <div className="w-1/3">
                                <Input
                                    readOnly
                                    size="lg"
                                    label="Pincode"
                                    value={user.pincode || ""}
                                />
                            </div>
                        </div>
                        <StyledButton
                            variant="outlined"
                            size="small"
                            startIcon={<FaSave />}
                            disabled
                        >
                            Save Profile
                        </StyledButton>
                        <Divider textAlign="left">
                            <Chip label="UPDATE PASSWORD" color="info" />
                        </Divider>
                        <div className="w-full flex space-x-6">
                            <div className="w-1/2">
                                <Input
                                    readOnly
                                    size="lg"
                                    label="Current Password"
                                    type="password"
                                    className="focus:ring-0"
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    readOnly
                                    size="lg"
                                    label="New Password"
                                    type="password"
                                    className="focus:ring-0"
                                />
                            </div>
                        </div>
                        <StyledButton
                            variant="outlined"
                            size="small"
                            startIcon={<FaRedoAlt />}
                            disabled
                        >
                            Update Password
                        </StyledButton>
                    </Paper>
                </div>
            </div>
        </StudentDashboardLayout>
    );
};

export default ProfilePage;
