import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import Header from '../components/Header';
import {
  OuterDiv,
  PostSectionDiv,
  TitleBoxDiv,
  TitleDiv,
  NicknameSpan,
  TimeSpan,
  ContentTextarea,
  InformationOuterDiv,
  InformationBoxDiv,
  InformationIndexDiv,
  InformationDiv,
  BankAccountOuterDiv,
  BankAccountIndexDiv,
  BankAccountBoxDiv,
  BankDiv,
  AccountDiv,
  MapBoxDiv,
  MapIndexDiv,
  MapDiv,
  BottomDiv,
  BottomIndexDiv,
  BottomTextarea,
  ApplyButton,
  EditDeleteBoxDiv,
  EditButton,
  DeleteButton,
  CommentSectionDiv,
  CommentIndexDiv,
  CommentOuterDiv,
  CommentBoxDiv,
  CommentApplicantBoxDiv,
  CommentApplicantNickDiv,
  CommentApplicantTimeDiv,
  CommentApplicantDeleteButton,
  CommentContentTextarea,
  ModalBackdrop,
  AlertModalView,
  AlertModalDiv,
  AlertModalButton,
  AlertModalButtonBoxDiv,
  CancelAlertModalButton,
  DeleteAlertModalButton,
} from '../components/ReadPostComponents';
import { ReadPostMap } from '../components/Map';
import axios from 'axios';

let url = 'http://localhost:8080';

const ReadPost = (props) => {
  const navigate = useNavigate();

  const [isDuplicated, setIsDuplicated] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [allUserInfo, setAllUserInfo] = useState([]);

  // 로컬 스토리지에 저장된 crrentPost
  const savedCurrentPost = JSON.parse(localStorage.getItem('currentPost'));

  // 로컬 스토리지에 저장된 userInfo
  const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

  // 로컬 스토리지에 저장된 commentList
  const savedCommentList = JSON.parse(localStorage.getItem('commentList'));

  // 닉네임 요청, 신청댓글 리스트, 모든유저정보 GET 요청
  useEffect(() => {
    // 모든유저 정보
    axios({
      url: url + '/post/user',
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        setAllUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // 작성자 id로 닉네임 요청
    axios({
      url: url + '/post/nickname',
      method: 'post',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        id: savedCurrentPost.user_id,
        // id: JSON.parse(localStorage.getItem('currentPost')).user_id,
      },
      withCredentials: true,
    })
      .then((res) => {
        localStorage.setItem(
          'currentPost',
          JSON.stringify({ ...savedCurrentPost, nickname: res.data.nickname })
        );
        // props.setCurrentPost({
        //   ...savedCurrentPost,
        //   nickname: res.data.nickname,
        // });
      })
      .catch((err) => {
        console.log(err);
      });

    // post id로 달린 댓글 가져오기
    axios({
      // url: url + `/comment/post/${savedCurrentPost.id}`,
      url: url + '/post/comments',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        post_id: savedCurrentPost.id,
      },
      withCredentials: true,
    })
      .then((res) => {
        setCommentList(res.data.commentList);
        // localStorage.setItem(
        //   'commentList',
        //   JSON.stringify(res.data.commentList)
        // );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 게시글에 이미 신청했는지 여부
  useEffect(() => {
    console.log('유저가 이미 신청한 게시글인지 확인합니다.');
    for (let i = 0; i < commentList.length; i++) {
      if (commentList[i].applicant_id === savedUserInfo.id) {
        setIsDuplicated(!isDuplicated);
      }
    }
  }, [commentList]);

  // 가격에 ',' 표시 붙이기
  let stringCharge = String(savedCurrentPost.delivery_charge);
  let charge = `${stringCharge.slice(
    0,
    stringCharge.length - 3
  )},${stringCharge.slice(-3)} 원`;

  // 입력창 상태관리
  const [textareaContent, setIsTextareaContent] = useState('');

  // 누락 알림 모달창 상태관리
  const [isBlankAlertModalOpen, setIsBlankAlertModalOpen] = useState(false);

  // 중복 신청 알림 모달창 상태관리
  const [isDuplicateAlertModalOpen, setIsDuplicateModalOpen] = useState(false);

  // 게시글 삭제 확인 알림 모달창 상태관리
  const [isPostDeleteAlertModalOpen, setIsPostDeleteAlretModalOpen] =
    useState(false);

  // 신청댓글 삭제 확인 알림 모달창 상태관리
  const [isCommentDeleteAlertModalOpen, setIsCommentDeleteAlretModalOpen] =
    useState(false);

  // 신청자 입렵값 변경에 따라 상태 변화
  const handleTextareaValue = (e) => {
    console.log('세부사항 입력중');
    setIsTextareaContent(e.target.value);
  };

  // 입력 누락 알림 모달창 상태 변경
  const openBlankAlertModalHandler = () => {
    console.log('입력 누락 알림 모달창 상태 변경');
    setIsBlankAlertModalOpen(!isBlankAlertModalOpen);
  };

  // 중복 신청 알림 모달창 상태 변경
  const openDuplicateAlertModalHandler = () => {
    console.log('중복 신청 알림 모달창 상태 변경');
    setIsDuplicateModalOpen(!isDuplicateAlertModalOpen);
  };

  // 게시글 삭제 확인 알림 모달창 상태 변경
  const openPostDeleteAlertModalHandler = () => {
    console.log('게시글 삭제 확인 모달창 상태 변경');
    setIsPostDeleteAlretModalOpen(!isPostDeleteAlertModalOpen);
  };

  // 신청댓글 삭제 확인 알림 모달창 상태 변경
  const openCommentDeleteAlertModalHandler = (commentId) => {
    console.log('신청댓글 삭제 확인 모달창 상태 변경');
    setSelectedCommentId(commentId);
    setIsCommentDeleteAlretModalOpen(!isCommentDeleteAlertModalOpen);
  };

  // 신청하기 버튼 클릭
  // 신청자 작성 내용 -> 서버로
  const onClickApplyButton = () => {
    console.log('신청하기 버튼 눌림');
    console.log(props.userInfo);
    console.log(props.userInfo.id);

    // 이미 신청한 사람이면 중복 신청 모달 띄우기
    if (isDuplicated === true) {
      console.log('중복 신청임');
      openDuplicateAlertModalHandler();
    }

    // 신청하기 버튼 누르면 신청자 정보 POST 요청
    else if (textareaContent.length > 0) {
      axios({
        // url: url + '/comment',
        url: url + '/post/comment',
        method: 'post',
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
          'Content-Type': 'application/json',
        },
        data: {
          post_id: savedCurrentPost.id,
          applicant_id: savedUserInfo.id,
          comment_content: textareaContent,
        },
        withCredentials: true,
      })
        .then((res) => {
          console.log('신청 하고 응답옴');
          console.log(res);
          navigate('/main');
          navigate('/readpost');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('신청자 세부내용 입력값이 없음');
      openBlankAlertModalHandler();
    }
  };

  // 게시글 수정 페이지로 이동
  const onClickEditButton = () => {
    console.log('수정 버튼 클릭');
    navigate('/editpost');
  };

  // 게시글 삭제 DELETE 요청
  const onClickPostDeleteButton = () => {
    console.log('게시글 삭제 확인 모달창 삭제 버튼 클릭');

    axios({
      // url: url + `/post:${savedCurrentPost.id}`,
      url: url + '/post/post',
      method: 'delete',
      data: {
        id: savedCurrentPost.id,
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('삭제응답 잘 들어옴');
        console.log(res);
        navigate('/main');
      })
      .catch((err) => console.log(err));
  };

  // 신청내역 댓글 삭제 DELETE 요청
  const onClickCommentDeleteButton = (commentId) => {
    console.log('신청내역 삭제 확인 모달창 삭제 버튼 클릭');
    console.log(`삭제될 comment의 id는 ${commentId}입니다.`);

    axios({
      // url: url + `/comment:${commentId}`,
      url: url + '/post/comment',
      method: 'delete',
      data: {
        id: commentId,
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('신청댓글 삭제 요청에 대한 응답이 옴');
        console.log(res);
        openCommentDeleteAlertModalHandler();
        navigate('/main');
        navigate('/readpost');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {Object.keys(savedCurrentPost).length === 0 ? null : (
        <>
          {isBlankAlertModalOpen === true ? (
            <ModalBackdrop>
              <AlertModalView>
                <AlertModalDiv>
                  주문할 메뉴 및 세부사항 입력해주세요!
                </AlertModalDiv>
                <AlertModalButton onClick={openBlankAlertModalHandler}>
                  확인
                </AlertModalButton>
              </AlertModalView>
            </ModalBackdrop>
          ) : null}

          {isDuplicateAlertModalOpen === true ? (
            <ModalBackdrop>
              <AlertModalView>
                <AlertModalDiv>이미 신청하신 게시글입니다!</AlertModalDiv>
                <AlertModalButton onClick={openDuplicateAlertModalHandler}>
                  확인
                </AlertModalButton>
              </AlertModalView>
            </ModalBackdrop>
          ) : null}

          {isPostDeleteAlertModalOpen === true ? (
            <ModalBackdrop>
              <AlertModalView>
                <AlertModalDiv>게시글을 정말 삭제 하시겠어요?</AlertModalDiv>
                <AlertModalButtonBoxDiv>
                  <CancelAlertModalButton
                    onClick={openPostDeleteAlertModalHandler}
                  >
                    취소
                  </CancelAlertModalButton>
                  <DeleteAlertModalButton onClick={onClickPostDeleteButton}>
                    삭제
                  </DeleteAlertModalButton>
                </AlertModalButtonBoxDiv>
              </AlertModalView>
            </ModalBackdrop>
          ) : null}

          {isCommentDeleteAlertModalOpen === true ? (
            <ModalBackdrop>
              <AlertModalView>
                <AlertModalDiv>
                  신청내역 댓글을 정말 삭제 하시겠어요?
                </AlertModalDiv>
                <AlertModalButtonBoxDiv>
                  <CancelAlertModalButton
                    onClick={openCommentDeleteAlertModalHandler}
                  >
                    취소
                  </CancelAlertModalButton>
                  <DeleteAlertModalButton
                    onClick={() =>
                      onClickCommentDeleteButton(selectedCommentId)
                    }
                  >
                    삭제
                  </DeleteAlertModalButton>
                </AlertModalButtonBoxDiv>
              </AlertModalView>
            </ModalBackdrop>
          ) : null}

          <Header
            setIsLoginCheck={props.setIsLoginCheck}
            isLoginCheck={props.isLoginCheck}
            isLoginModal={props.isLoginModal}
            setIsLoginModal={props.setIsLoginModal}
          />
          {commentList === 0 ? null : (
            <OuterDiv>
              <PostSectionDiv>
                <TitleBoxDiv>
                  <TitleDiv>{savedCurrentPost.title}</TitleDiv>
                  <NicknameSpan>{savedCurrentPost.nickname}</NicknameSpan>
                  <TimeSpan>{savedCurrentPost.createdAt.slice(0, 10)}</TimeSpan>
                </TitleBoxDiv>
                <ContentTextarea
                  value={savedCurrentPost.content}
                  readOnly
                ></ContentTextarea>
                <InformationOuterDiv>
                  <InformationBoxDiv>
                    <InformationIndexDiv>메&nbsp; 뉴</InformationIndexDiv>
                    <InformationDiv>{savedCurrentPost.menu}</InformationDiv>
                  </InformationBoxDiv>
                  <InformationBoxDiv>
                    <InformationIndexDiv>모 집 상 태</InformationIndexDiv>
                    <InformationDiv>
                      {commentList.length}/{savedCurrentPost.recruit_volume[0]}{' '}
                      명
                    </InformationDiv>
                  </InformationBoxDiv>
                  <InformationBoxDiv>
                    <InformationIndexDiv>전 체 배 달 료</InformationIndexDiv>
                    <InformationDiv>{charge}</InformationDiv>
                  </InformationBoxDiv>
                </InformationOuterDiv>
                <BankAccountOuterDiv>
                  <BankAccountIndexDiv>
                    입금해주실 은행 및 계좌번호
                  </BankAccountIndexDiv>
                  <BankAccountBoxDiv>
                    <BankDiv>{savedCurrentPost.bank_name}은행</BankDiv>
                    <AccountDiv>{savedCurrentPost.account_number}</AccountDiv>
                  </BankAccountBoxDiv>
                </BankAccountOuterDiv>
                <MapBoxDiv>
                  <MapIndexDiv>
                    배달받을 장소: {savedCurrentPost.address}
                  </MapIndexDiv>
                  <MapDiv>
                    <ReadPostMap currentPost={savedCurrentPost} />
                  </MapDiv>
                </MapBoxDiv>
                <BottomDiv>
                  <BottomIndexDiv>원하는 메뉴 및 세부사항</BottomIndexDiv>
                  <BottomTextarea
                    placeholder="이곳에 작성한 내용은 아래 신청내역에서 확인할 수 있습니다."
                    onChange={handleTextareaValue}
                  ></BottomTextarea>
                  {savedCurrentPost.user_id === savedUserInfo.id ? (
                    <EditDeleteBoxDiv>
                      <EditButton onClick={onClickEditButton}>수 정</EditButton>
                      <DeleteButton onClick={openPostDeleteAlertModalHandler}>
                        삭 제
                      </DeleteButton>
                    </EditDeleteBoxDiv>
                  ) : (
                    <>
                      {savedCurrentPost.recruit_volume[0] ===
                      String(commentList.length) ? (
                        <ApplyButton disabled>
                          모 집 이&nbsp; 완 료 되 었 습 니 다
                        </ApplyButton>
                      ) : (
                        <>
                          {props.isLoginCheck ? (
                            <ApplyButton onClick={onClickApplyButton}>
                              신 청 하 기
                            </ApplyButton>
                          ) : (
                            <ApplyButton disabled>
                              신청을 위해 로그인해주세요
                            </ApplyButton>
                          )}
                        </>
                      )}
                    </>
                  )}
                </BottomDiv>
              </PostSectionDiv>
              {commentList.length === 0 ? null : (
                <CommentSectionDiv>
                  <CommentIndexDiv>신 청 내 역</CommentIndexDiv>
                  <CommentOuterDiv>
                    {commentList.map((comment) => {
                      let userNickname = '';
                      for (let i = 0; i < allUserInfo.length; i++) {
                        if (allUserInfo[i].id === comment.applicant_id) {
                          userNickname = allUserInfo[i].nickname;
                        }
                      }
                      return (
                        <CommentBoxDiv key={comment.id}>
                          <CommentApplicantBoxDiv>
                            <CommentApplicantNickDiv>
                              {userNickname}
                            </CommentApplicantNickDiv>
                            <CommentApplicantTimeDiv>
                              {comment.createdAt.slice(0, 10)}
                            </CommentApplicantTimeDiv>
                            {savedUserInfo.id === comment.applicant_id ||
                            savedUserInfo.nickname ===
                              savedCurrentPost.nickname ? (
                              <CommentApplicantDeleteButton
                                onClick={() =>
                                  openCommentDeleteAlertModalHandler(comment.id)
                                }
                              >
                                삭제
                              </CommentApplicantDeleteButton>
                            ) : null}
                          </CommentApplicantBoxDiv>
                          <CommentContentTextarea
                            readOnly
                            value={comment.comment_content}
                          ></CommentContentTextarea>
                        </CommentBoxDiv>
                      );
                    })}
                  </CommentOuterDiv>
                </CommentSectionDiv>
              )}
            </OuterDiv>
          )}
        </>
      )}
    </>
  );
};

export default ReadPost;
