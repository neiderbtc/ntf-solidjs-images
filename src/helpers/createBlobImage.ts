export const createBlobImage = (e: Event) => {
    const target = e.target as HTMLFormElement;
    const _img = target.files[0];
    return URL.createObjectURL(_img)
}