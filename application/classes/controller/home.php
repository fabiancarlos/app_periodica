<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Home extends Controller_Application {

	public function action_index(){

		$view = View::factory('site/home/page');

		$this->template->content = $view;
	}

} 
