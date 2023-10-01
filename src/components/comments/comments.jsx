import React, { useEffect, useState } from 'react';
//import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';
//import { ReactComponent as UpArrow } from '../../assets/up-arrow.svg';
//import { useState } from 'react';
//import Action from './Action';
import { v4 as uuid } from 'uuid';

const Comments = ({ comment, count, setComment }) => {
  const [currentComment, setCurrentComment] = useState(comment);
  const [edit, setEdit] = useState(false);
  const [reply, setReply] = useState(false);
  const [currentText, setCurrentText] = useState(comment.text);
  const [outerComment, setOuterComment] = useState('');
  const [innerComment, setInnerComment] = useState('');
  const addComment = () => {
    setCurrentComment((prev) => {
      prev.comment = [...prev.comment, { text: outerComment, comment: [] }];
      return { ...prev };
    });
    setOuterComment('');
  };
  const replyComment = () => {
    setCurrentComment((prev) => {
      if (Array.isArray(prev.comment)) {
        prev.comment.push({ text: innerComment, comment: [] });
      } else {
        prev.comment = [{ text: innerComment, comment: [] }];
      }
      return prev;
    });
    setReply((prev) => !prev);
  };
  const editComment = () => {
    setCurrentComment((prev) => {
      prev.text = currentText;
      return { ...prev };
    });
    setEdit((prev) => !prev);
  };
  const deleteComment = () => {
    setCurrentComment((prev) => {
      prev = { text: undefined, comment: [] };
      return { ...prev };
    });
  };
  useEffect(() => {
    setCurrentComment(currentComment);
    if (comment.id === 1) {
      console.log('update');
      setComment(currentComment);
    }
  }, [currentComment, currentComment.comment, currentComment.comment?.length]);
  return (
    <div className="commentsContainer">
      {currentComment.id === 1 ? (
        <div>
          <input
            onChange={(e) => {
              setOuterComment(e.target.value);
            }}
            value={outerComment}
            type="text"
          />
          <button onClick={addComment}>add</button>
        </div>
      ) : (
        <div>
          <div style={{ display: edit ? 'block' : 'none' }}>
            {edit ? (
              <>
                {' '}
                <input
                  autoFocus={true}
                  onChange={(e) => {
                    setCurrentText(e.target.value);
                  }}
                  type="text"
                  value={currentText}
                />
                <button onClick={editComment}>save</button>
                <button
                  onClick={() => {
                    setCurrentText(comment.text);
                    setEdit((prev) => !prev);
                  }}>
                  cancel
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
          <p>
            {currentComment.text}
            <div className="buttons">
              <button
                onClick={() => {
                  setEdit((prev) => !prev);
                }}>
                edit
              </button>
              <button
                onClick={() => {
                  deleteComment();
                }}>
                delete
              </button>
              <button
                onClick={() => {
                  setReply((prev) => !prev);
                }}>
                reply
              </button>
            </div>
          </p>
          <div style={{ display: reply ? 'block' : 'none' }}>
            {reply ? (
              <>
                {' '}
                <input
                  autoFocus={true}
                  onChange={(e) => {
                    setInnerComment(e.target.value);
                  }}
                  type="text"
                  value={innerComment}
                />
                <button onClick={replyComment}>save</button>
                <button
                  onClick={() => {
                    setInnerComment('');
                    setReply((prev) => !prev);
                  }}>
                  cancel
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
      {currentComment.comment &&
        currentComment.comment.map((el) => {
          return <Comments key={uuid()} comment={el} count={count + 1} setComment={setComment} />;
        })}
    </div>
  );
};

export default Comments;
