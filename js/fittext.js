


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>FitText.js/jquery.fittext.js at master · davatron5000/FitText.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe111-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (e233cae611) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="45712FBA:1FA7:302706A3:52672FA9" name="octolytics-dimension-request_id" /><meta content="3711404" name="octolytics-actor-id" /><meta content="prismspecs" name="octolytics-actor-login" /><meta content="ae56419abba25c3228f9a752e8f286efde861330e62c2b5d93d8d1654914f662" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="tnI0hAjnFIe2v3A7XG1bVE/cZ4vfAbnJMreMlWnDQiI=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-37b6e181a972ce6706fa61ad91a3f4994af90049.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-8159a6c9a2c0054ae5779d7c98fa8d0b5dd25fca.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-8a61e23841d9e5ecc084748ec552e548cd05c977.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-9f540012812e5f4c5b7158124e41b8495523ac21.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="cf6c14028323ce6b99e40379c7d5c6ac">

        <link data-pjax-transient rel='permalink' href='/davatron5000/FitText.js/blob/6a915866c84373da4bad173b404942de38074d46/jquery.fittext.js'>
  <meta property="og:title" content="FitText.js"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/davatron5000/FitText.js"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="FitText.js - A jQuery plugin for inflating web type"/>

  <meta name="description" content="FitText.js - A jQuery plugin for inflating web type" />

  <meta content="42218" name="octolytics-dimension-user_id" /><meta content="davatron5000" name="octolytics-dimension-user_login" /><meta content="1706871" name="octolytics-dimension-repository_id" /><meta content="davatron5000/FitText.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1706871" name="octolytics-dimension-repository_network_root_id" /><meta content="davatron5000/FitText.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/davatron5000/FitText.js/commits/master.atom" rel="alternate" title="Recent Commits to FitText.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public  page-blob">
    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="prismspecs"
      data-repo="davatron5000/FitText.js"
      data-branch="master"
      data-sha="9a8ac826bb557149446d43c2ac80e0ba59b69e5c"
  >

    <input type="hidden" name="nwo" value="davatron5000/FitText.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/prismspecs" class="name">
        <img height="20" src="https://2.gravatar.com/avatar/7edefa0b2d87ac87dca54d7a24ee103d?d=https%3A%2F%2Fidenticons.github.com%2F5a217c06d8986110702a4eedf42231ec.png&amp;r=x&amp;s=140" width="20" /> prismspecs
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="davatron5000/FitText.js">This repository</span>
    </li>
      <li>
        <a href="/davatron5000/FitText.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="tnI0hAjnFIe2v3A7XG1bVE/cZ4vfAbnJMreMlWnDQiI=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1706871" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/davatron5000/FitText.js/watchers">
        184
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/davatron5000/FitText.js/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/davatron5000/FitText.js/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/davatron5000/FitText.js/stargazers">3,492</a>
</div>

  </li>


        <li>
          <a href="/davatron5000/FitText.js/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/davatron5000/FitText.js/network" class="social-count">761</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/davatron5000" class="url fn" itemprop="url" rel="author"><span itemprop="title">davatron5000</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/davatron5000/FitText.js" class="js-current-repository js-repo-home-link">FitText.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/davatron5000/FitText.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /davatron5000/FitText.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/davatron5000/FitText.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /davatron5000/FitText.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>23</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/davatron5000/FitText.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /davatron5000/FitText.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>13</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/davatron5000/FitText.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /davatron5000/FitText.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/davatron5000/FitText.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /davatron5000/FitText.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/davatron5000/FitText.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /davatron5000/FitText.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/davatron5000/FitText.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /davatron5000/FitText.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/davatron5000/FitText.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/davatron5000/FitText.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:davatron5000/FitText.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:davatron5000/FitText.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/davatron5000/FitText.js" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/davatron5000/FitText.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="github-mac://openRepo/https://github.com/davatron5000/FitText.js" data-url="github-mac://openRepo/https://github.com/davatron5000/FitText.js" class="minibutton sidebar-button js-conduit-rewrite-url">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


              <a href="/davatron5000/FitText.js/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:1cad6bdd4b01b1ac4c55d334fa1706a4 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/davatron5000/FitText.js/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitText.js/blob/gh-pages/jquery.fittext.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitText.js/blob/master/jquery.fittext.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitText.js/blob/min-font-size/jquery.fittext.js"
                 data-name="min-font-size"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="min-font-size">min-font-size</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/davatron5000/FitText.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">FitText.js</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.fittext.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.fittext.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/d1a474e522e0d8522c28e8af1d673bed?d=https%3A%2F%2Fidenticons.github.com%2Fc9d41ced05ad9f3e92326cb5efdef1dd.png&amp;s=140" width="24" />
    <span class="author"><a href="/tsvensen" rel="author">tsvensen</a></span>
    <time class="js-relative-date" datetime="2013-05-07T09:05:20-07:00" title="2013-05-07 09:05:20">May 07, 2013</time>
    <div class="commit-title">
        <a href="/davatron5000/FitText.js/commit/2d3574e549ec0f4074be2abf45aecfdd367ab3f9" class="message" data-pjax="true" title="Namespace to all lowercase">Namespace to all lowercase</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="davatron5000" href="/davatron5000/FitText.js/commits/master/jquery.fittext.js?author=davatron5000"><img height="20" src="https://0.gravatar.com/avatar/0988796fb50136535a69cea314396cfa?d=https%3A%2F%2Fidenticons.github.com%2Fa1490f0395c0933e4fb3c724ba1f4712.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Boldewyn" href="/davatron5000/FitText.js/commits/master/jquery.fittext.js?author=Boldewyn"><img height="20" src="https://1.gravatar.com/avatar/d4d55e6108bf1e879aca4afc00e6a1a0?d=https%3A%2F%2Fidenticons.github.com%2F8c1c08e691380b533c7312fbe3fbee6e.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tsvensen" href="/davatron5000/FitText.js/commits/master/jquery.fittext.js?author=tsvensen"><img height="20" src="https://0.gravatar.com/avatar/d1a474e522e0d8522c28e8af1d673bed?d=https%3A%2F%2Fidenticons.github.com%2Fc9d41ced05ad9f3e92326cb5efdef1dd.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="darcyclarke" href="/davatron5000/FitText.js/commits/master/jquery.fittext.js?author=darcyclarke"><img height="20" src="https://0.gravatar.com/avatar/9a2682849ccc5377e10637c38fbb3987?d=https%3A%2F%2Fidenticons.github.com%2Fd5514e2a37f5c049eecaee1aad11fca7.png&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://0.gravatar.com/avatar/0988796fb50136535a69cea314396cfa?d=https%3A%2F%2Fidenticons.github.com%2Fa1490f0395c0933e4fb3c724ba1f4712.png&amp;s=140" width="24" />
          <a href="/davatron5000">davatron5000</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://1.gravatar.com/avatar/d4d55e6108bf1e879aca4afc00e6a1a0?d=https%3A%2F%2Fidenticons.github.com%2F8c1c08e691380b533c7312fbe3fbee6e.png&amp;s=140" width="24" />
          <a href="/Boldewyn">Boldewyn</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://0.gravatar.com/avatar/d1a474e522e0d8522c28e8af1d673bed?d=https%3A%2F%2Fidenticons.github.com%2Fc9d41ced05ad9f3e92326cb5efdef1dd.png&amp;s=140" width="24" />
          <a href="/tsvensen">tsvensen</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://0.gravatar.com/avatar/9a2682849ccc5377e10637c38fbb3987?d=https%3A%2F%2Fidenticons.github.com%2Fd5514e2a37f5c049eecaee1aad11fca7.png&amp;s=140" width="24" />
          <a href="/darcyclarke">darcyclarke</a>
        </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>44 lines (32 sloc)</span>
        <span>1.074 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards js-conduit-openfile-check"
               href="github-mac://openRepo/https://github.com/davatron5000/FitText.js?branch=master&amp;filepath=jquery.fittext.js"
               data-url="github-mac://openRepo/https://github.com/davatron5000/FitText.js?branch=master&amp;filepath=jquery.fittext.js"
               title="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/davatron5000/FitText.js/edit/master/jquery.fittext.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/davatron5000/FitText.js/raw/master/jquery.fittext.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/davatron5000/FitText.js/blame/master/jquery.fittext.js" class="button minibutton ">Blame</a>
          <a href="/davatron5000/FitText.js/commits/master/jquery.fittext.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/davatron5000/FitText.js/delete/master/jquery.fittext.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*global jQuery */</span></div><div class='line' id='LC2'><span class="cm">/*!</span></div><div class='line' id='LC3'><span class="cm">* FitText.js 1.1</span></div><div class='line' id='LC4'><span class="cm">*</span></div><div class='line' id='LC5'><span class="cm">* Copyright 2011, Dave Rupert http://daverupert.com</span></div><div class='line' id='LC6'><span class="cm">* Released under the WTFPL license</span></div><div class='line' id='LC7'><span class="cm">* http://sam.zoy.org/wtfpl/</span></div><div class='line' id='LC8'><span class="cm">*</span></div><div class='line' id='LC9'><span class="cm">* Date: Thu May 05 14:23:00 2011 -0600</span></div><div class='line' id='LC10'><span class="cm">*/</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">$</span> <span class="p">){</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">fitText</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">kompressor</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Setup options</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">compressor</span> <span class="o">=</span> <span class="nx">kompressor</span> <span class="o">||</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;minFontSize&#39;</span> <span class="o">:</span> <span class="nb">Number</span><span class="p">.</span><span class="nx">NEGATIVE_INFINITY</span><span class="p">,</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;maxFontSize&#39;</span> <span class="o">:</span> <span class="nb">Number</span><span class="p">.</span><span class="nx">POSITIVE_INFINITY</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Store the object</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Resizer() resizes items based on the object width divided by the compressor * 10</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resizer</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;font-size&#39;</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">width</span><span class="p">()</span> <span class="o">/</span> <span class="p">(</span><span class="nx">compressor</span><span class="o">*</span><span class="mi">10</span><span class="p">),</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">maxFontSize</span><span class="p">)),</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">minFontSize</span><span class="p">)));</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Call once to set.</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resizer</span><span class="p">();</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Call on resize. Opera debounces their resize by default.</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;resize.fittext orientationchange.fittext&#39;</span><span class="p">,</span> <span class="nx">resizer</span><span class="p">);</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.04330s from github-fe111-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/davatron5000/FitText.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

