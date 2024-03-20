import React, { useEffect } from 'react'
import './css/style.css'
// import './js/script.js'
import staff from './images/staff.jpg'
import profile from './images/profile.png'
import profile from './images/profile.png'
import styled from 'styled-components';
import $ from 'jquery';

const StyledParagraph = styled.p`
  max-width: 100%;
  overflow-wrap: break-word;
  font-size: 16px; // Default font size
  @media (max-width: 768px) {
    font-size: 14px; // Adjust font size for smaller screens
  }
`;
const App = () => {



  useEffect(() => {
    // console.log('s');
    $(document).ready(() => {

      $(document).ready(function () {

        var tempCssClass;

        setTimeout(function () {
          $('#initTyping').remove();
          $('#msg1').removeClass('hidden').after(typingEffect());
          setTimeout(function () {
            $('.temp-typing').remove();
            $('#msg2').removeClass('hidden').after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
              $('.temp-typing').remove();
              $('#msg3').removeClass('hidden').after(typingEffect());
              scrollToBottom();
              setTimeout(function () {
                $('.temp-typing').remove();
                $('#msg4').removeClass('hidden');
              }, 0);
            }, 1750);
          }, 1250);
        }, 750);

        var buttonValue;
        var currentStep;

        $('button.chat-button').on('click', function () {

          currentStep = $(this).attr('data-form-step');
          buttonValue = $(this).attr('data-form-value');

          if (currentStep == 1) {
            //scrollToBottom();
            $('#agentBlock2 .agent-chat').prepend(typingEffect());
            $('#msg4').addClass('hidden');
            $('#userBlock1').removeClass('hidden');
            scrollToBottom();
            setTimeout(function () {
              $('#agentBlock2').removeClass('hidden');
              scrollToBottom();
              setTimeout(function () {
                $('.temp-typing').remove();
                $('#msg6').removeClass('hidden').after(typingEffect());
                scrollToBottom();
                setTimeout(function () {
                  $('.temp-typing').remove();
                  $('#msg7').removeClass('hidden').after(typingEffect());
                  scrollToBottom();
                  setTimeout(function () {
                    $('.temp-typing').remove();
                    $('#msg8').removeClass('hidden');
                    scrollToBottom();
                  }, 0);
                }, 1750);
              }, 2250);
            }, 50);
          }

          if (currentStep == 2) {
            //scrollToBottom();
            $('#agentBlock3 .agent-chat').prepend(typingEffect());
            $('#msg8').addClass('hidden');
            $('#userBlock2').removeClass('hidden');
            //scrollToBottom();
            if (buttonValue == 'No') {
              $('#msg9no').removeClass('hidden');
              $('#hdnApprovalStatus').val('no');
            } else {
              $('#msg9yes').removeClass('hidden');
            }
            scrollToBottom();
            setTimeout(function () {
              $('#agentBlock3').removeClass('hidden');
              scrollToBottom();
              setTimeout(function () {
                $('.temp-typing').remove();
                $('#msg10').removeClass('hidden').after(typingEffect());
                scrollToBottom();
                setTimeout(function () {
                  $('.temp-typing').remove();
                  $('#msg11').removeClass('hidden');
                  scrollToBottom();
                }, 0);
              }, 1750);
            }, 50);

          }
          if (currentStep == 3) {
            if (buttonValue == 'No') {
              $('#agentBlock4 .agent-chat').prepend(typingEffect());
              $('#msg11').addClass('hidden');
              $('#userBlock3').removeClass('hidden');
              $('#msg12no').removeClass('hidden');
              if ($('#hdnApprovalStatus').val() == 'no') {
                //downsell
                $('#DownsellNumber').removeClass('hidden');
                var script = document.createElement('script');
                script.src = 'http://b-js.ringba.com/CAce87ab953d1047f5906492e50ebecfc7';
                document.head.appendChild(script);
                $('#msg14disapproved').removeClass('hidden');
                $('#msg16disapproved').removeClass('hidden');
              } else {
                //standard aca
                $('#PrimaryNumber').removeClass('hidden');
                var script = document.createElement('script');
                script.src = 'http://b-js.ringba.com/CA265c12c4178f4529af85c14bcf70ad42';
                document.head.appendChild(script);
                $('#msg14approved').removeClass('hidden');
                $('#msg16approved').removeClass('hidden');
              }
              scrollToBottom();
              setTimeout(function () {
                $('#agentBlock4').removeClass('hidden');
                scrollToBottom();
                setTimeout(function () {
                  $('.temp-typing').remove();
                  $('#msg13').removeClass('hidden').after(typingEffect());
                  scrollToBottom();
                  setTimeout(function () {
                    $('.temp-typing').remove();
                    $('#msg14').removeClass('hidden').after(typingEffect());
                    scrollToBottom();
                    setTimeout(function () {
                      $('.temp-typing').remove();
                      $('#msg15').removeClass('hidden').after(typingEffect());
                      scrollToBottom();
                      setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg16').removeClass('hidden').after(typingEffect());
                        scrollToBottom();
                        setTimeout(function () {
                          $('.temp-typing').remove();
                          $('#msg17').removeClass('hidden');
                          scrollToBottom();
                        }, 0);
                      }, 2250);
                    }, 1250);
                  }, 1750);
                }, 1250);
              }, 250);
            } else if (buttonValue == 'Medicaid') {
              $('#agentBlock4 .agent-chat').prepend(typingEffect());
              $('#msg11').addClass('hidden');
              $('#userBlock3').removeClass('hidden');
              $('#msg12medicaid').removeClass('hidden');
              if ($('#hdnApprovalStatus').val() == 'no') {
                //downsell
                $('#DownsellNumber').removeClass('hidden');
                var script = document.createElement('script');
                script.src = 'http://b-js.ringba.com/CAce87ab953d1047f5906492e50ebecfc7';
                document.head.appendChild(script);
                $('#msg14disapproved').removeClass('hidden');
                $('#msg16disapproved').removeClass('hidden');
              } else {
                //standard aca
                $('#PrimaryNumber').removeClass('hidden');
                var script = document.createElement('script');
                script.src = 'http://b-js.ringba.com/CA265c12c4178f4529af85c14bcf70ad42';
                document.head.appendChild(script);
                $('#msg14approved').removeClass('hidden');
                $('#msg16approved').removeClass('hidden');
              }
              scrollToBottom();
              setTimeout(function () {
                $('#agentBlock4').removeClass('hidden');
                scrollToBottom();
                setTimeout(function () {
                  $('.temp-typing').remove();
                  $('#msg13').removeClass('hidden').after(typingEffect());
                  scrollToBottom();
                  setTimeout(function () {
                    $('.temp-typing').remove();
                    $('#msg14').removeClass('hidden').after(typingEffect());
                    scrollToBottom();
                    setTimeout(function () {
                      $('.temp-typing').remove();
                      $('#msg15').removeClass('hidden').after(typingEffect());
                      scrollToBottom();
                      setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg16').removeClass('hidden').after(typingEffect());
                        scrollToBottom();
                        setTimeout(function () {
                          $('.temp-typing').remove();
                          $('#msg17').removeClass('hidden');
                          scrollToBottom();
                        }, 0);
                      }, 2250);
                    }, 1250);
                  }, 1750);
                }, 1250);
              }, 250);
            } else if (buttonValue == 'Medicare') {
              $('#agentBlock4 .agent-chat').prepend(typingEffect());
              $('#msg11').addClass('hidden');
              $('#userBlock3').removeClass('hidden');
              $('#msg12medicare').removeClass('hidden');
              if ($('#hdnApprovalStatus').val() == 'no') {
                //downsell
                $('#DownsellNumber').removeClass('hidden');
                var script = document.createElement('script');
                script.src = 'http://b-js.ringba.com/CAce87ab953d1047f5906492e50ebecfc7';
                document.head.appendChild(script);
                $('#msg14disapproved').removeClass('hidden');
                $('#msg16disapproved').removeClass('hidden');
              } else {
                //standard aca
                $('#PrimaryNumber').removeClass('hidden');
                var script = document.createElement('script');
                script.src = 'http://b-js.ringba.com/CA265c12c4178f4529af85c14bcf70ad42';
                document.head.appendChild(script);
                $('#msg14approved').removeClass('hidden');
                $('#msg16approved').removeClass('hidden');
              }
              scrollToBottom();
              setTimeout(function () {
                $('#agentBlock4').removeClass('hidden');
                scrollToBottom();
                setTimeout(function () {
                  $('.temp-typing').remove();
                  $('#msg13').removeClass('hidden').after(typingEffect());
                  scrollToBottom();
                  setTimeout(function () {
                    $('.temp-typing').remove();
                    $('#msg14').removeClass('hidden').after(typingEffect());
                    scrollToBottom();
                    setTimeout(function () {
                      $('.temp-typing').remove();
                      $('#msg15').removeClass('hidden').after(typingEffect());
                      scrollToBottom();
                      setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg16').removeClass('hidden').after(typingEffect());
                        scrollToBottom();
                        setTimeout(function () {
                          $('.temp-typing').remove();
                          $('#msg17').removeClass('hidden');
                          scrollToBottom();
                        }, 0);
                      }, 2250);
                    }, 1250);
                  }, 1750);
                }, 1250);
              }, 250);
            }
          }
        });

        function scrollToBottom() {
          var object = $('main');
          $('html, body').animate({
            scrollTop: object.offset().top + object.outerHeight() - $(window).height()
          }, 'fast');
        }

        function typingEffect(cssClass) {
          var string = '<div className="temp-typing bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">';
          string += '<div className="typing-animation">';
          string += '<div className="typing-dot"></div>';
          string += '<div className="typing-dot"></div>';
          string += '<div className="typing-dot"></div>';
          string += '</div>';
          string += '</div>';

          return string;
        }

        var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        document.addEventListener('DOMContentLoaded', function () {
          var currentDate = new Date();
          var currentDayOfWeek = daysOfWeek[currentDate.getDay()];
          var currentMonth = months[currentDate.getMonth()];
          var currentDay = currentDate.getDate();
          var currentYear = currentDate.getFullYear();
          var formattedDate = currentDayOfWeek + ', ' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '/' + ('0' + currentDay).slice(-2) + '/' + currentYear;

          var currentDateElement = document.getElementById('currentDate');
          if (currentDateElement) {
            currentDateElement.textContent = formattedDate;
          } else {
            console.error("Element with ID 'currentDate' not found.");
          }
        });


      });


      document.addEventListener('DOMContentLoaded', function () {
        // Function to get the 'amount' parameter from the URL
        function getURLParameter(name) {
          var reg = new RegExp('[?&]' + name + '=([^&#]*)', 'i');
          var string = reg.exec(window.location.href);
          return string ? string[1] : null;
        }

        // Retrieve the value of the 'amount' parameter
        var amountValue = getURLParameter('amount');

        // Replace '6400' with the 'amount' value if it exists
        if (amountValue) {
          var searchFor = '6400';
          var replaceWith = amountValue;
          var innerHTML = document.body.innerHTML;

          // Replace all occurrences of '6400' with the amount value
          var newHTML = innerHTML.replace(new RegExp(searchFor, 'g'), replaceWith);
          document.body.innerHTML = newHTML;
        }
      });




    });
  }, []);
  return (
    <>

      <input id="hdnApprovalStatus" type="hidden" />
      <input id="hdnAgeApproved" name="hdnAgeApproved" type="hidden" value="yes" />


      <main className="min-h-screen">

        <div className="max-w-4xl mx-auto bg-white text-center text-gray-600">
          <div className="p-4">
            <p style={{ whiteSpace: 'nowrap' }} className="font-serif text-md sm:text-lg font-bold mt-2"><span className="text-red-600">Warning:</span>Enrollment closes today at 8pm EST</p>
            <h2 className="font-bold text-xl sm:text-3xl mt-1">Unlock $5,800 Allowance for Americans to cover Groceries,Gas, Rent, and Medical Expenses</h2>
          </div>
          <div className="w-full md:col-span-1 text-center block">
            <div className=" text-sm flex items-center justify-center">
              <span className="relative flex h-4 w-4 inline-flex mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </span>
              Julliette is Online.
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white">
          <div className="p-4">
            <div className="space-y-4">
              <div className="chat-container pb-2">


                <div id="agentBlock1" className="flex items-end w-5/6">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={staff} alt="Sender Avatar" />
                  </div>
                  <div className="ml-3 agent-chat">
                    <div id="initTyping" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">
                      <div className="typing-animation">
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                      </div>
                    </div>
                    <div id="msg1" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">Hi
                        👋
                      </p>
                    </div>
                    <div id="msg2" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">I'm Julliette from Health Allowances.</p>
                    </div>
                    <div id="msg3" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">Want to find out if you qualify for up a $5,800 Allowance? Tap Yes!</p>
                    </div>
                    <div id="msg4" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <div className="">
                        <button className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-12" type="button" data-form-step="1" data-form-value="Yes">Yes</button>
                      </div>
                    </div>
                  </div>
                </div>


                <div id="userBlock1" className="flex items-start justify-end pt-4 hidden">
                  <div className="mr-3 receiver-chat">
                    <div id="msg5" className="bg-blue-500 text-white p-3 rounded-lg shadow-xs mt-2 inline-block">
                      <p className="text-md">Yes</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={profile} alt="Receiver Avatar" />
                  </div>
                </div>


                <div id="agentBlock2" className="flex items-end w-5/6 hidden pt-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={staff} alt="Sender Avatar" />
                  </div>
                  <div className="ml-3 agent-chat">
                    <div id="msg6" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">Okay, let me ask you two quick questions.</p>
                    </div>
                    <div id="msg7" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">Do you make less than $50,000/year? Tap Yes or No.</p>
                    </div>
                    <div id="msg8" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <div className="grid grid-rows-1 grid-cols-2 gap-x-3">
                        <button className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8" type="button" data-form-step="2" data-form-value="Yes">Yes</button>
                        <button className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8" type="button" data-form-step="2" data-form-value="No">No</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="userBlock2" className="flex items-start justify-end hidden">
                  <div className="mr-3 receiver-chat">
                    <div className="bg-blue-500 text-white p-3 rounded-lg shadow-xs mt-2 inline-block">
                      <p id="msg9yes" className="text-md hidden">Yes</p>
                      <p id="msg9no" className="text-md hidden">No</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={profile} alt="Receiver Avatar" />
                  </div>
                </div>


                <div id="agentBlock3" className="flex items-end w-5/6 hidden pt-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={staff} alt="Sender Avatar" />
                  </div>

                  <div className="ml-3 agent-chat">
                    <div id="msg10" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">Are you on medicaid or medicare?</p>
                    </div>
                    <div id="msg11" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <div className="grid grid-rows-1 grid-cols-2 gap-x-3">
                        <button className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8" type="button"  data-form-step="3" 
  data-form-value="Medicaid">Yes</button>
                        <button className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8" type="button"   data-form-step="3" 
  data-form-value="Medicare">No</button>
                      </div>
                    </div>

                  </div>

                </div>


                <div id="userBlock3" className="flex items-start justify-end hidden">
                  <div className="mr-3 receiver-chat">
                    <div className="bg-blue-500 text-white p-3 rounded-lg shadow-xs mt-2 inline-block">
                      <p id="msg12yes" className="text-md hidden">Yes</p>
                      <p id="msg12no" className="text-md hidden">No</p>
                      <p id="msg12medicaid" className="text-md hidden">Medicaid</p>
                      <p id="msg12medicare" className="text-md hidden">Medicare</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={profile} alt="Receiver Avatar" />
                  </div>
                </div>

                <div id="agentBlock4" className="flex items-end w-5/6 hidden pt-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={staff} alt="Sender Avatar" />
                  </div>
                  <div className="ml-3 agent-chat">
                    <div id="msg13" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">
                        🎉
                        Congratulations!
                        🎁
                      </p>
                    </div>
                    <div id="msg14" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p id="msg14approved" className="text-md text-gray-800 hidden">You qualify for a $5800 allowance!</p>
                      <p id="msg14disapproved" className="text-md text-gray-800 hidden">You're pre-qualified for a $6400 subsidy!</p>
                    </div>
                    <div id="msg15" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">You can use it for your grocery, rent, medical expenses, and so on.</p>

                    </div>
                    <div id="msg16" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-full sm:w-fit hidden">
  <p id="msg16approved" className="text-md text-gray-800 hidden">
    Tap the number button below and <b>mention health allowance</b> to get your <b>$5800</b> It only takes 2 minutes.
  </p>
</div>



                    <div id="msg17" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800 py-2">
                        <a id="PrimaryNumber" href="tel:18885170494" className="chat-button text-white font-bold bg-green-500 rounded-full py-3 px-8 hidden ttc-button" style={{ whiteSpace: 'nowrap' }}>CALL (888) 517-0494</a>
                        <a id="DownsellNumber" href="tel:18885170494" className="chat-button text-white font-bold bg-green-500 rounded-full py-3 px-8 hidden" style={{ whiteSpace: 'nowrap' }}>CALL (888) 517-0494</a>

                      </p>
                    </div>

                    <div id="msg18" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">Congratulations!

                        You're pre-qualified for a $6400 subsidy!

                        You can use it for your grocery, rent, medical expenses, and so on.

                        Tap the blue button below to call now to get your $6400 subsidy, It only takes 2 minutes.</p>
                    </div>

                    <div id="msg19" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800 py-2">
                        <a href="tel:+18337912967" className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8 hidden ttc-button">+1 (833) 791-2967</a>

                      </p>
                    </div>

                  </div>
                </div>
                <div id="agentBlock5" className="flex items-end w-5/6 hidden pt-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="images/agent.webp" alt="Sender Avatar" />
                  </div>
                  <div className="ml-3 agent-chat">
                    <div id="msg13q" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800"> Sorry you don't qualify for the $6,400 subsidy </p>
                    </div>
                    <div id="msg14q" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p id="msg14approvedq" className="text-md text-gray-800 hidden">You're pre-qualified for a $6400 subsidyz!</p>
                      <p id="msg14disapprovedq" className="text-md text-gray-800 hidden">You're pre-qualified for a $6400 subsidy!</p>
                    </div>
                    <div id="msg15q" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">But You Are Qualified For The 2024 Debt Forgiveness Program! Tap below if you have $10,000 or more in credit card, personal loan, or medidal debt!</p>
                      <p className="text-md text-gray-800">All you have to do is call this number below and let them know you are interested in the FREE health insurance that gets you the $6400 health credit</p>
                    </div>
                    <div id="msg16q" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p id="msg16approvedq" className="text-md text-gray-800 hidden">Click below to check now
                      </p>
                      <p id="msg16disapprovedq" className="text-md text-gray-800 hidden">Click below to check now
                      </p>
                    </div>
                    <div id="msg17q" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800 py-2">
                        <a id="PrimaryNumberq" href="https://www.frebahlem.com/BDW467PQ/G4KZZ15/" className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8 hidden ttc-button">Click Here >>></a>
                        <a id="DownsellNumberq" href="https://www.frebahlem.com/BDW467PQ/G4KZZ15/" className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8 hidden">Click Here >>></a>
                      </p>
                    </div>

                    <div id="msg18" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">Congratulations!

                        You're pre-qualified for a $6400 subsidy!

                        You can use it for your grocery, rent, medical expenses, and so on.

                        Tap the blue button below to call now to get your $6400 subsidy, It only takes 2 minutes.</p>
                    </div>

                    <div id="msg19" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800 py-2">
                        <a href="tel:+18337912967" className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8 hidden ttc-button">+1 (833) 791-2967</a>

                      </p>
                    </div>

                  </div>
                </div>
                <div id="agentBlock6" className="flex items-end w-5/6 hidden pt-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="images/agent.webp" alt="Sender Avatar" />
                  </div>
                  <div className="ml-3 agent-chat">
                    <div id="msg13qz" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800"> Sorry you don't qualify for the $6,400 subsidy </p>
                    </div>
                    <div id="msg14q" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p id="msg14approvedq" className="text-md text-gray-800 hidden">You're pre-qualified for a $6400 subsidyz!</p>
                      <p id="msg14disapprovedq" className="text-md text-gray-800 hidden">You're pre-qualified for a $6400 subsidy!</p>
                    </div>
                    <div id="msg15qz" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">But You can claim a $3,500 Grocery Allowance With Your Medicare Benefits By Tapping Below</p>
                      <p className="text-md text-gray-800">All you have to do is call this number below and let them know you are interested in the FREE health insurance that gets you the $6400 health credit</p>
                    </div>
                    <div id="msg16qz" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p id="msg16approvedqz" className="text-md text-gray-800 hidden">Click below to check now
                      </p>
                      <p id="msg16disapprovedqz" className="text-md text-gray-800 hidden">Click below to check now
                      </p>
                    </div>
                    <div id="msg17qz" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800 py-2">
                        <a id="PrimaryNumberqz" href="https://iddqdtrk.com?o=219723&a=3698&s1=" className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8 hidden ttc-button">Click Here >>></a>
                        <a id="DownsellNumberqz" href="https://iddqdtrk.com?o=219723&a=3698&s1=" className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8 hidden">Click Here >>></a>
                      </p>
                    </div>

                    <div id="msg18" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800">Congratulations!

                        You're pre-qualified for a $6400 subsidy!

                        You can use it for your grocery, rent, medical expenses, and so on.

                        Tap the blue button below to call now to get your $6400 subsidy, It only takes 2 minutes.</p>
                    </div>

                    <div id="msg19" className="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                      <p className="text-md text-gray-800 py-2">
                        <a href="tel:+18337912967" className="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8 hidden ttc-button">+1 (833) 791-2967</a>

                      </p>
                    </div>

                  </div>
                </div>

                <div id="disconnected" className="pt-2 hidden">
                  <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-300 text-xs">Chat Closed</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </main>

      <div id="tcpa" className="pt-2 hidden">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8 text-sm sm:text-md leading-5 sm:leading-6 text-gray-500">
          <div className="tcpa-container text-xs text-center leading-5 text-gray-500">
          </div>
        </div>
      </div>


    </>
  )
}

export default App