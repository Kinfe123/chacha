"use server";

import { revalidatePath } from "next/cache";

import { 
  followUser, 
  meFollowing, 
  mefollowUser,
  unfollowUser
} from "@/lib/follow-user";

export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUser(id);

    revalidatePath("/");

    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`);
      revalidatePath(`/${followedUser.following.username}/followers`);
    }

    return followedUser;
  } catch (error) {
    throw new Error("Interal Error");
  };
};
export const onMeFollow = async (id: string) => {
  try {
    const followedUser = await mefollowUser(id);

    revalidatePath("/");

    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`);
      revalidatePath(`/${followedUser.following.username}/followers`);
    }

    return followedUser;
  } catch (error) {
    throw new Error("Interal Error");
  };
};

export const onUnfollow = async (id: string) => {
  try {
    const unfollowedUser = await unfollowUser(id);

    revalidatePath("/");

    if (unfollowedUser) {
      revalidatePath(`/${unfollowedUser.following.username}`)
      revalidatePath(`/${unfollowedUser.following.username}/followers`);
      revalidatePath(`/${unfollowedUser.following.username}`)
    }

  return unfollowedUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
}