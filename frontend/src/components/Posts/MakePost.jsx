import React, { useState } from "react";
import Input from "../InputFields/Input";
import "./makePost.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
const MakePost = (props) => {
    const { setOpen } = props;

    const dispatch = useDispatch();

    const [title, setTitle] = useState("Add a title");
    const [desc, setDesc] = useState("Add some description");
    const [selectedIdx, setSelectedIdx] = useState(0);
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
    const handlePost = () => {
        setOpen(false);
        const newPost = {
            title: title,
            description: desc,
            tag: selectedIdx,
        };
        dispatch(createPost(newPost))
    };
    return (
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>
                    Post
                </p>
            </div>
            <Input
                data={title}
                inputType="textarea"
                setData={setTitle}
                label="Title"
                classStyle="makepost-title"
            />
            <Input
                data={desc}
                inputType="textarea"
                setData={setDesc}
                label="Descriptions"
                classStyle="makepost-desc"
            />
            <label>Tags</label>
            <div className="makepost-tags">
                {tags.map((tag, index) => {
                    return (
                        <button
                            key={index}
                            className={
                                selectedIdx === index
                                    ? "makepost-tags-selected"
                                    : `makepost-tags-${tag}`
                            }
                            onClick={() => setSelectedIdx(index)}
                        >
                            {tag}
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default MakePost;
