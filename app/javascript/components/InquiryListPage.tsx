import React, { useEffect, useState } from "react";
import { Inquiry } from "../domain/model";
import {
  Button,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatFullDateTime } from "../common/format";
import { LabelTypography } from "../common/customMUI";
import CategoryTag from "../common/CategoryTag";

const InquiryListPage = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/inquiries", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      const sortedData = data.sort((a, b) => {
        const dateA = new Date(a.updated_at).getTime();
        const dateB = new Date(b.updated_at).getTime();

        return dateB - dateA;
      });
      setInquiries(sortedData);
    };

    fetchData();
  }, []);

  if (inquiries.length === 0) {
    return null;
  }
  return (
    <div>
      <Link href="/" component={Button}>
        {"Go to input page"}
      </Link>
      <TableContainer component={Paper} sx={{ minWidth: 650, maxHeight: 750 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <LabelTypography>id</LabelTypography>
              </TableCell>
              <TableCell align="center">
                <LabelTypography>Name</LabelTypography>
              </TableCell>
              <TableCell align="center">
                <LabelTypography>Email</LabelTypography>
              </TableCell>
              <TableCell align="center">
                <LabelTypography>Category</LabelTypography>
              </TableCell>
              <TableCell align="left">
                <LabelTypography>Message</LabelTypography>
              </TableCell>
              <TableCell align="right">
                <LabelTypography>UpdatedBy</LabelTypography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow
                key={inquiry.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {inquiry.id}
                </TableCell>
                <TableCell align="center">{inquiry.name}</TableCell>
                <TableCell align="center">{inquiry.email}</TableCell>
                <TableCell align="center">
                  <CategoryTag category={inquiry.category} />
                </TableCell>
                <TableCell align="left">{inquiry.message}</TableCell>
                <TableCell align="right">
                  {formatFullDateTime(inquiry.updated_at)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InquiryListPage;
