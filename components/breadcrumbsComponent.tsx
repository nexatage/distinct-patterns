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
    <div className="flex justify-start mr-auto ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="font-semibold" href="/">HOME</BreadcrumbLink>
          </BreadcrumbItem>

          {pathnameSeparate.map((pathname, index) => (
            <div key={index} className="flex justify-center items-center">
              <BreadcrumbSeparator />
              <BreadcrumbItem key={pathname}>
                <BreadcrumbLink className="font-semibold" href={`/${pathname}`}>
                  {`${pathname.toUpperCase()}`}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
