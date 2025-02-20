import { Member } from "@/models/Member";
import { Project } from "@/models/Project";
import type { Request, Response } from "express";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const { _id, name } = req.body;
    let { description } = req.body;

    if (!description) description = "A Project";

    const project = new Project({ name, description });

    await project.save();

    if (!project) {
      return res.json({
        success: false,
        message: "Unable to create Project",
      });
    }

    const member = new Member({
      userId: _id,
      projectId: project._id,
      role: "Admin",
    });

    await member.save();

    if (!member) {
      return res.json({
        success: false,
        message: "Unable to create Member",
      });
    }

    return res.json({
      success: true,
      message: "Project created successfully",
      data: { project, member },
    });
  } catch (error) {
    const err: IError = {
      success: false,
      message: JSON.stringify(error),
    };
    return res.status(500).json(err);
  }
};
