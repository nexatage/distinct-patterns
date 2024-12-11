"use client";

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
  const pathnameSeparate = pathname.split("/", 3).slice(1, 5); // Removes empty strings and gets path parts

  // Only render if `pathnameSeparate` has elements
  if (pathnameSeparate.length === 0 || pathnameSeparate[0] == "") {
    return null;
  }

  return (
    <div className="w-full flex justify-start ml-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {pathnameSeparate.map((pathname, index) => (
            <div key={index} className="flex justify-center items-center">
              <BreadcrumbSeparator />
              <BreadcrumbItem key={pathname}>
                <BreadcrumbLink href={`/${pathname}`}>
                  {`${pathname.slice(0, 1).toUpperCase()}${pathname.slice(1)}`}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
