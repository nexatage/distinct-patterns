"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function Breadcrumbss() {
  const pathname = usePathname();
  const pathnameSeparate = pathname.split("/", 3).slice(1,5); // Removes empty strings and gets path parts

  // Only render if `pathnameSeparate` has elements
  if (pathnameSeparate.length === 0|| pathnameSeparate[0] == "" ) {
    return null;
  }

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {pathnameSeparate.map((pathname,i) => (
            <React.Fragment key={i}>
            <BreadcrumbSeparator />
            <BreadcrumbItem key={i+1}>
              <BreadcrumbLink href={`/${pathname}`}>{pathname}</BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
